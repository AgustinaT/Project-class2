import React from "react";
import useForm from "../../hooks/useForm";
import { Shop } from "../../context/ShopContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import enviarOrden from "../../Utils/enviarOrden";

 

const CartForm = () => {
  const [valid, setValid] = useState(false);

  const [step, setStep] = useState(true);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Se envía el formulario");
    console.log("form values: ", values);

    //validacion 
    if (name.trim().length < 1) {
  console.log("error nuevo")

    }
    else {
      setValid(true);
    }

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
  };

  const getTotal = () => {
    return cart.reduce(
      (acumulador, itemCart) =>
        acumulador + itemCart.precio * itemCart.quantity,
      0
    );
  };
  console.log(getTotal());

  const handleStep = (stepBool, e) => {
    e.preventDefault();
    if (valid) {
      setStep(stepBool);
      console.log(step);
    } 
    else {
      setStep(true);
    }
    
  };

  return (
    <div>
      <div className="setStep">
        <h5 className="text-center">Pago</h5>
      </div>
      <form className="form" onSubmit={handleSubmit}>
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
              {/* <input
                type="email"
                className="form-control mt-2"
                placeholder="email"
                name="email"
                onChange={handleInputChange}
                value={email || ""}
              />
              <input
                type="email"
                className="form-control mt-2"
                placeholder="Confirmar email"
                name="confirmaremail"
                onChange={handleInputChange}
                value={confirmaremail || ""}
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Dirección"
                name="street"
                onChange={handleInputChange}
                value={street || ""}
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Número de teléfono"
                name="number"
                onChange={handleInputChange}
                value={number || ""}
              />
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
                  onClick={(e) => handleStep(false, e)}
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
