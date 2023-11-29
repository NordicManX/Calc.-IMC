import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imcCalculado = peso / (alturaMetros * alturaMetros);
      setImc(imcCalculado.toFixed(2));
    }
  };

  const calcularClassificacao = (imc) => {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 24.9) {
      return 'Peso normal';
    } else if (imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc < 34.9) {
      return 'Obesidade grau 1';
    } else if (imc < 39.9) {
      return 'Obesidade grau 2';
    } else {
      return 'Obesidade grau 3';
    }
  };

  return (
    <div className="App">
      <h1>CALCULADORA DE IMC</h1>
      
      <div className='container1'>
        <label><b>Altura (cm):</b>
        <i class="bi bi-person-arms-up"></i>
        </label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div className='container2'>
        <label><b>Peso (kg):</b> </label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && (
        <div>
          <h2>Resultado</h2>
          <p>Seu IMC é: {calcularClassificacao(parseFloat(imc))}</p>
        </div>
        
      )}
    </div>
  );
}

export default App;
