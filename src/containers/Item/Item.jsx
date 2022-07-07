import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Item.css";
import ItemCount from "../../components/ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";

const Item = ({ prod /*5*/ }) => {
  const { nombre, precio, imagen, descripcion} = prod; //le saqwue una pdop id
  const onAdd = (contador) => {
    console.log("Se agrego al carrito");
  };

 //6

 const navigate = useNavigate();
 const handleDetail = () => {
  console.log("Navegá");
  navigate(`/detail/${prod.id}`)
 }
  return (
    
    <Card className="Item">
      <div className="imagenes">
        <img src={imagen} alt="puppyPhoto" />
      </div>
      <Card.Body className="card">
        <Card.Title>{nombre} </Card.Title>
        <Card.Text className="card-descripcion">{descripcion}</Card.Text>
        <Card.Text>precio: {precio}</Card.Text>
        <Button className="btn btn-success" onClick={()=>handleDetail()}>Ver detalle del producto</Button> {/*por props le paso el id "7"*/}
        <ItemCount onAdd={onAdd} />
      </Card.Body>
    </Card>

 );
};

export default Item;
