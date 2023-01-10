import './App.css';
import logoPNG from './imgs/logo.png';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src={logoPNG}
          alt='logo pagina'
          />
      </div>
    </div>
  );
}

export default App;
