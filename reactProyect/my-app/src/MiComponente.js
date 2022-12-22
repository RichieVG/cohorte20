import React from "react"; 
 
const miComponente = () => { 
 
  let nombre = "PedroVar"; 
  let web = "Generation.org"; 
  let usuario = { 
    nombre: "JuanHer", 
    apellido: "Robles", 
    edad: 18 + " años" 
  } 
 
  return ( 
    <> 
    <header> 
      <h1> Componente creado</h1> 
      <ul> 
        <li>° <em> <strong>Nombre:</strong> </em>  {JSON.stringify(usuario)}</li> 
        <li>° <em> <strong>Web:</strong> </em> {web}</li> 
        <li>° React</li> 
        <li>° vue</li> 
      </ul> 
  <p> 
    Este es mi primer componente 
  </p> 
  </header> 
  </> 
  ); 
} 
 
export default miComponente 
 
 
{/* 
  Esto es un comentario de bloque en React 
*/} 
 
/* 
Esto es un comentario en React 
*/