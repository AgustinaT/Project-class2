import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Item.css"
import ItemCount from "../../components/ItemCount/ItemCount";

const Item = ({ prod }) => {
  const { nombre, precio, imagen } = prod;
  const onAdd = (contador) => {
    console.log("Se agrego al carrito");
  };
  return (
    <Card className="Item">
      <Card.Img className= "imagenes" variant="top" src={imagen} style={{width:"160px", height:"250px"}}/>
      <Card.Body className="card">
        <Card.Title >{nombre} </Card.Title>
        <Card.Text>precio: {precio}</Card.Text>
        <Button className= "btn btn-success" >Ver detalle del producto</Button>
        <ItemCount onAdd={onAdd} />
      </Card.Body>
    </Card>
  );
};

export default Item;
