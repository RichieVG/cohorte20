import React from 'react'
import { PropTypes } from 'react'
export const TercerComponente = ({ nombre, apellido, ficha }) => {
    return (
        <div>

            <h1> TercerComponente </h1>
            <h2> Comunicación entre componentes</h2>

            <ul>
                <li>{nombre}</li>
                <li>{apellido}</li>

                <li>{ficha.grupo}</li>
                <li>{ficha.estado}</li>
                <li>{ficha.altura}</li>
                <li>{ficha.alergias}</li>
            </ul>

        </div>
    )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    ficha: PropTypes.object
}