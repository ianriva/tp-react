import React from 'react'
import instrumentosLista from './data/instrumentos.json';
import Tarjeta from './Tarjeta';

function Home() {
    let instrumentos = instrumentosLista.instrumentos.map(instrumento => (
        <Tarjeta key={instrumento.id} id={instrumento.id} nombre={instrumento.instrumento} imagePath={instrumento.imagen} descripcion={instrumento.descripcion}>{instrumento.instrumento}</Tarjeta>
    ));
    return (
        <div className="d-flex flex-wrap">
            {instrumentos}
        </div>
    )
}

export default Home
