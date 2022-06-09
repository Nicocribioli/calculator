import './App.css';
import calculatorLogo from "./images/calculator-img.png";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ButtonClear from "./components/ButtonClear";
import { useState } from 'react';
import { evaluate } from "mathjs";



function App() {

  const [input, setInput] = useState("");


  const addInput = val => {
    setInput(input + val);
  };

  const addResult = () => {
    if (input) {
    setInput(evaluate(input));
    } else {
      alert("Ingrese un valor para realizar la operación")
    }
  };

  return (
    <div className="App">
      <div className="calculator-logo-container">
        <img
          src={calculatorLogo}
          className="calculator-logo"
          alt="Calculator" />
      </div>
      <div className='calculator-container'>
        <Screen input={input}/>
        <div className='row'>
          <Button useClick={addInput}>1</Button>
          <Button useClick={addInput}>2</Button>
          <Button useClick={addInput}>3</Button>
          <Button useClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button useClick={addInput}>4</Button>
          <Button useClick={addInput}>5</Button>
          <Button useClick={addInput}>6</Button>
          <Button useClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button useClick={addInput}>7</Button>
          <Button useClick={addInput}>8</Button>
          <Button useClick={addInput}>9</Button>
          <Button useClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button useClick={addResult}>=</Button>
          <Button useClick={addInput}>0</Button>
          <Button useClick={addInput}>.</Button>
          <Button useClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear useClear={() => setInput("")}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
