import React from "react";
//import Buttom from '../Button/Button'
//import Add from '../Add/Add'
import { useRef } from "react";
const resultRef = useRef(null);
const inputRef = useRef(null);

export default function Form(){
    <form>
        <p ref={resultRef}> 
          {result}
        </p> 
        <input
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
    </form>
}
