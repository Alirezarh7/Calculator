import React from "react";
import { useRef } from "react";


const Form =()=>{
    const inputRef = useRef(null); 
    const resultRef = useRef(null);
    return(
        <div className="App"> 
        <div> 
        <h1>Simplest Working Calculator</h1> 
        </div> 
        <form> 
        <p ref={resultRef}> 
        </p> 
        <input
            ref={inputRef} 
            type="number" 
            placeholder="Type a number" 
        /> 
         
        {/* Add the subtract button */} 
        {/* Add the multiply button */} 
        {/* Add the divide button */} 
        {/* Add the resetInput button */} 
        {/* Add the resetResult button */} 
        </form> 
    </div>
    ) 
}
export default Form ;