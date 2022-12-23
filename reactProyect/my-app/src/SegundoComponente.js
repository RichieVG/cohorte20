import React from "react"


export const SegundoComponente = () => {

    const libros = ["Harry Potter", "El hobbit", "1984"];
    return (
        <div>
            <h1> SegundoComponente</h1>
            <h2> Lista de libros</h2>
            {libros.length >= 1 ? (
                <ul>
                    {

                        libros.map((Libro, indice) => {
                            return <li key={indice}> {Libro} </li>
                        })
                    }
                </ul>)
                :(<p>*****No hay libros*****</p>)}

        </div>
    )
}