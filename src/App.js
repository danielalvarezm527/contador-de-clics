import './App.css';
import Boton from './componentes/Boton';
import BotonDeNumeroAleatorio from './componentes/BotonDeNumeroAleatorio';
import Contador from './componentes/Contador';
import logoPNG from './imgs/logo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  const numeroAleatorio = () => {
    setNumClics(Math.round(Math.random() * 1000));
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src={logoPNG}
          alt='logo pagina'
          />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>

        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>

        <BotonDeNumeroAleatorio
          texto='Numero aleatoro'
          accion={numeroAleatorio}/>
      </div>
    </div>
  );
}

export default App;
