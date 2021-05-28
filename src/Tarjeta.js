import React from 'react';
import {Link} from 'react-router-dom';
function Tarjeta(props) {
    return (
        <div id={props.id} className="card m-3" style={{"width": "18rem"}}>
            <img src={`/assets/images/${props.imagePath}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.descripcion}</p>
                <Link className="btn btn-primary" to={`/instrumento/${props.id}`}>Detalle</Link>
            </div>
        </div>
    )
}

export default Tarjeta;
