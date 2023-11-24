import React, { useState, useRef } from "react";
import Button from "../Button/Button";

const Minus = () => {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const handleMinus = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;

    if (inputValue === '' || isNaN(inputValue)) {
      alert('Please enter a valid number');
    } else {
      setResult((result) => result - Number(inputValue));
      inputRef.current.value = '';
      inputRef.current.placeholder = 'Add your number';
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleMinus(e);
    }
  };

  return (
    <div>
      <p>{result}</p>
      <input ref={inputRef} type="number" placeholder="Type a number" onKeyDown={handleKeyPress}  />
      <Button onClick={handleMinus} >Add</Button>
    </div>
  );
};

export default Minus;
