import React, { useState } from "react";
import Button from '../Botton/Botton';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (value) => {
    setInputValue(inputValue + value);
  };

  const handleClear = () => {
    setInputValue('');
    setResult(0);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(inputValue)); // Using eval() here for simplicity, but consider safer options in production
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div>
      <p>Result: {result}</p>
      <input type="text" value={inputValue} readOnly />
      <div>
        <Button onClick={() => handleInput('1')}>1</Button>
        <Button onClick={() => handleInput('2')}>2</Button>
        <Button onClick={() => handleInput('3')}>3</Button>
        <Button onClick={() => handleInput('+')}>+</Button>
      </div>
      <div>
        <Button onClick={() => handleInput('4')}>4</Button>
        <Button onClick={() => handleInput('5')}>5</Button>
        <Button onClick={() => handleInput('6')}>6</Button>
        <Button onClick={() => handleInput('-')}>-</Button>
      </div>
      <div>
        <Button onClick={() => handleInput('7')}>7</Button>
        <Button onClick={() => handleInput('8')}>8</Button>
        <Button onClick={() => handleInput('9')}>9</Button>
        <Button onClick={() => handleInput('*')}>*</Button>
      </div>
      <div>
        <Button onClick={() => handleInput('0')}>0</Button>
        <Button onClick={() => handleInput('.')}>.</Button>
        <Button onClick={() => handleClear()}>C</Button>
        <Button onClick={() => handleCalculate()}>=</Button>
      </div>
    </div>
  );
};

export default Calculator;
