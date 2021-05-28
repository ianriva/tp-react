import React from 'react'
import { Link } from 'react-router-dom';
import instrumentosLista from './data/instrumentos.json'
function Instrumento(props) {
    console.log(props);
    const instrumentos = instrumentosLista.instrumentos;
    let instrumento = instrumentos.filter(instrumento => instrumento.id === props.match.params.id)[0];
    if (instrumento) {
    return (
        <div>
            <h1>{instrumento.instrumento}</h1>
            <p>Marca: {instrumento.marca}</p>
            <p>Modelo: {instrumento.modelo}</p>
            <p>Precio: ${instrumento.precio}</p>
            <p>Descripción: {instrumento.descripcion}</p>
        </div>
    )
} else {
    return (
        <div className="alert alert-primary my-4">
            <p className="py-3">No existe el instrumento</p>
            <Link to="/">Volver</Link>
        </div>
    )
}
}

export default Instrumento;
