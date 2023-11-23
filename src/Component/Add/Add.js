import React from "react";

function plus(e) {
    e.preventDefault();
    const inputValue = inputRef.current.value;

    if (inputValue === '' || isNaN(inputValue)) {
      alert('Please enter a valid number');
    } else {
      setResult((prevResult) => prevResult + Number(inputValue));
      inputRef.current.value = ''; // Clear the input value
      inputRef.current.placeholder = 'Add your number'; // Set placeholder
    }
  }
export default plus;