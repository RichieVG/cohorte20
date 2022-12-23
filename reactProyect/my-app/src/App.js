import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

function App() {
  const fichaMedica = {
    altura: "1.85 cm",
    alergias: "Ninguna",
    grupo: "RH+",
    estado: "bueno"
  }

const numero = 2357;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <MiComponente></MiComponente>

        <SegundoComponente></SegundoComponente>

        <TercerComponente
          nombre={numero}
          apellido="Robles"
          ficha={fichaMedica}
        ></TercerComponente>

        Learn React


      </header>
      {/*comentario*/}
    </div>
  );
}

export default App;
