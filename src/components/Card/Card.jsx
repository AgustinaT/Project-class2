import React from 'react'
import { Link } from 'react-router-dom'
import foto from '../../images/anya.jpg'


const card = () => {

  return (
    <div className="card col-6 mx-auto">
    <div className='contenedor-anya text-center'>
    <img src={foto} className="card-img-top mt-3" alt="foto-anya" style= {{width: '200px', height: '200px'}}/>
  <div className="card-body">
    <h5 className="card-title">Orden de compra</h5>
    <h6 className="card-subtitle mb-2 text-muted">Tu compra fue exitosa!</h6>
    <p className="card-text">Te avisaremos cuando tu compra este en camino</p>
    <Link to="/" className="btn btn-outline-success">Seguir comprando</Link>
  </div>
  </div>
</div>
  )
}

export default card