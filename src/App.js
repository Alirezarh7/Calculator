import {useState,useRef} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0);
   
  
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
 
  function minus(e) { 
  	 
  };
 
  function times(e) { 
    // Add the code for the plus function 
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result}
        </p> 
        <input
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button type="submit" onClick={plus}>add</button> 
        {/* Add the subtract button */} 
        {/* Add the multiply button */} 
        {/* Add the divide button */} 
        {/* Add the resetInput button */} 
        {/* Add the resetResult button */} 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
