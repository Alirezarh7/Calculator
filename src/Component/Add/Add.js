import React from "react";
import { useState,useRef, createContext} from "react";

const MyContext = React.createContext();

const Plus =(e) => {
  const inputRef = useRef(null);  
  const [result, setResult] = useState(0);
  
    e.preventDefault();
    const inputValue = inputRef.current.value;

    if (inputValue === '' || isNaN(inputValue)) {
      alert('Please enter a valid number');
    } else {
      const sum ={
      makeSum: setResult((prevResult) => prevResult + Number(inputValue)),
      clear : inputRef.current.value = '', // Clear the input value
      massage:inputRef.current.placeholder = 'Add your number', // Set placeholder

      }
    }
    <MyContext.Provider value={result} />
  }
export default Plus;