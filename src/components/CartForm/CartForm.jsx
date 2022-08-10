import React from "react";
import useForm from "../../hooks/useForm";
import { Shop } from "../../context/ShopContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import enviarOrden from "../../Utils/enviarOrden";

const CartForm = () => {

  const [step, setStep] = useState(true);

  const [errorName, setErrorName]= useState("")
  const [stateName, setStateName]= useState(false)

  const [errorMail, setErrorMail]= useState("")
  const [stateMail, setStateMAil]= useState(false)

  const [errorMailconf, setErrorMailconf]= useState("")
  const [stateMailconf, setStateMailconf]= useState(false)

  const [errorStreet, setErrorStreet] = useState("");
  const [stateStreet, setStateStreet] = useState(false);

  const [errorNumber, setErrorNumber] = useState("");
  const [stateNumber, setStateNumber] = useState(false);

  const [errorCodigo, setErrorCodigo] = useState("");
  const [stateCodigo, setStateCodigo] = useState(false);

  const [buttons] = useState({
    submit: "Pagar",
    back: "Anterior",
  });
  const { clearCart } = useContext(Shop);
  const navigate = useNavigate();

  const { cart } = useContext(Shop);

  const [values, handleInputChange] = useForm({
    name: "",
    email: "",
    confirmaremail: "",
    street: "",
    number: "",
    CP: "",
    comment: "",
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const {
    name,
    email,
    street,
    number,
    CP,
    comment,
    cardholderName,
    cardNumber,
    expiryDate,
    cvv,
    confirmaremail,
  } = values;

  let errors = {
		name: {
			text:'',
			state: false
		},
		password: {
			text: '', 
			state: false
		}
	};

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion Name
    if (name.trim().length < 1) {
        setErrorName("La casilla no puede estar vacia") 
        setStateName(true);
        console.log(errors.name.text,errors.name.state)
    }else {
      setStateName(false);
    }

    const regexEmail =
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
// Email validation //
		if (email.trim().length < 1) {
			setErrorMail('las casilla no pueden estar vacias');
			setStateMAil(true)
		} else if (!regexEmail.test(email)) {
			setErrorMail('formato de correo invalido');
			setStateMAil(true);
		} else {
			setStateMAil(false);
		}

//Validacion Email confirmar
   if (confirmaremail.trim().length < 1) {
    setErrorMailconf('las casilla no pueden estar vacias');
    setStateMailconf(true)
} else if (!regexEmail.test(email)) {
    setErrorMailconf('formato de correo invalido');
    setStateMailconf(true);
} else if ( email !== confirmaremail){
setErrorMailconf('los email deben ser igual');
    setStateMailconf(true);
}else {
    setStateMailconf(false);
}

//Validacion Street //
    if (name.trim().length < 1) {
      setErrorStreet("La casilla no puede estar vacia") 
      setStateStreet(true);
  }else {
    setStateStreet(false);
  }

//Validacion Number //
  if (name.trim().length < 1) {
    setErrorNumber("La casilla no puede estar vacia") 
    setStateNumber(true);
}else {
  setStateNumber(false);
}

//validacion cp //
if (CP.trim().length < 1) {
  setErrorCodigo("La casilla no puede estar vacia") 
  setStateCodigo(true);
}else {
  setStateCodigo(false);
}


const confirmForm= () => {
  if ( !stateName && !stateMail && !stateMailconf && !stateStreet && !stateNumber && !stateCodigo ) {
      return false;
  } else {
      return true;
  }
};
const isValidated = confirmForm();
if(isValidated) {
  setStep(false);
   const dataOrder = {
      buyer: values,
      items: cart,
      totalPrice: getTotal(),
      date: new Date().toLocaleString(),
    };
    console.log("data order: ", dataOrder);
    enviarOrden(cart, dataOrder);
    clearCart();
    navigate("/card");
}
  };

  const getTotal = () => {
    return cart.reduce(
      (acumulador, itemCart) =>
        acumulador + itemCart.precio * itemCart.quantity,
      0
    );
  }; 

  // const handleStep = (stepBool, e) => {
  //   e.preventDefault();
  //   if (valid) {
  //     setStep(stepBool);
  //     console.log(step);
  //   } 
  //   else {
  //     setStep(true);
  //   }
    
  // };

  return (
    <div>
      <div className="setStep">
        <h5 className="text-center">Pago</h5>
      </div>
      <form className="form">
        {step ? (
          <>
            <h6 className="detalle-envio text-center">Detalle de envio</h6>
            <div className="form-container col-8 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="name"
                onChange={handleInputChange}
                value={name}
              />
              {
              stateName &&  <p style={{color:"red"}}>{errorName}</p> 
              }
              <input
                type="text"
                className="form-control mt-2"
                placeholder="email"
                name="email"
                onChange={handleInputChange}
                value={email}
              />
               {
              stateMail &&  <p style={{color:"red"}}>{errorMail}</p> 
              }

              <input
                type="text"
                className="form-control mt-2"
                placeholder="Confirmar email"
                name="confirmaremail"
                onChange={handleInputChange}
                value={confirmaremail}
              />
              {
              (stateMailconf) &&  <p style={{color:"red"}}>{errorMailconf}</p> 
              }

              <input
                type="text"
                className="form-control mt-2"
                placeholder="Dirección"
                name="street"
                onChange={handleInputChange}
                value={street}
              />
              {
              stateStreet &&  <p style={{color:"red"}}>{errorStreet}</p> 
              }

              <input
                type="text"
                className="form-control mt-2"
                placeholder="Número de teléfono"
                name="number"
                onChange={handleInputChange}
                value={number}
              />
              {
              stateNumber &&  <p style={{color:"red"}}>{errorNumber}</p> 
              }

              <input
                type="text"
                className="form-control mt-2"
                placeholder="Código postal"
                name="CP"
                onChange={handleInputChange}
                value={CP }
              />
              {
              (stateCodigo) &&  <p style={{color:"red"}}>{errorCodigo}</p> 
              }

              <textarea
                name="comment"
                className="form-control mt-2"
                cols="30"
                rows="10"
                placeholder="Comentario"
                onChange={handleInputChange}
                value={comment || ""}
              ></textarea>


              {/* 
                           
              
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Código postal"
                name="CP"
                onChange={handleInputChange}
                value={CP || ""}
              />
              <textarea
                name="comment"
                className="form-control mt-2"
                cols="30"
                rows="10"
                placeholder="Comentario"
                onChange={handleInputChange}
                value={comment || ""}
              ></textarea> */}
              <div className="button-container">
                <button
                  type="submit"
                  className="btn btn-outline-success mt-2 mx-auto"
                 /*  onClick={(e) => handleStep(false, e)} */
                 onClick={handleSubmit}
                >
                  Siguiente
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="form-container col-8 mx-auto">
              <h6 className="detalle-pago text-center">Detalle de pago</h6>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Titular de la tarjeta"
                name="cardholderName"
                onChange={(e) => handleInputChange(e)}
                value={cardholderName || ""}
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Número de tarjeta"
                name="cardNumber"
                onChange={(e) => handleInputChange(e)}
                value={cardNumber || ""}
              />
              <div className="credit-card-data">
                <input
                  type="month"
                  min="2022-08"
                  className="form-control mt-2"
                  placeholder="Fecha de caducidad"
                  name="expiryDate"
                  onChange={(e) => handleInputChange(e)}
                  value={expiryDate || ""}
                />
                <input
                  type="text"
                  className="form-control mt-2 my-2"
                  placeholder="CVV"
                  name="cvv"
                  onChange={(e) => handleInputChange(e)}
                  value={cvv || ""}
                />
              </div>
              <div className="button-container">
                <input
                  type="button"
                  className="btn btn-outline-success mx-0"
                  value={buttons.back}
                  // onClick={(e) => handleStep(true, e)}
                />
                <input
                  type="submit"
                  className="btn btn-outline-success"
                  value={buttons.submit}
                />
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default CartForm;