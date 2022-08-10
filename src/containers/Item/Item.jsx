import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Item.css";
import { useNavigate } from "react-router-dom";

const Item = ({ prod }) => {
  const { nombre, precio, imagen, descripcion} = prod;

 const navigate = useNavigate();
 const handleDetail = () => {
  navigate(`/detail/${prod.id}`)
 }
  return (
    
    <Card className="Item">
      <div className="imagenes">
        <img src={imagen} alt="anime-foto" />
      </div>
      <Card.Body className="card">
        <Card.Title>{nombre} </Card.Title>
        <Card.Text className="card-descripcion">{descripcion}</Card.Text>      
        <div>
        <Card.Text>precio: {precio}</Card.Text>
        <Button className="btn btn-success" onClick={()=>handleDetail()}>Ver detalle del producto</Button>
        </div>
        
      </Card.Body>
    </Card>

 );
};

export default Item;
