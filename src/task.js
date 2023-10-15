import React from "react";
import { useState, useEffect } from 'react';
function TextCounter(){
    const [val,setVal]=useState('');
    const [word,setWord]=useState(0);
    const handleChange = (e) =>{
        const data = e.target.value.split(' ')
        console.log(data);
        setWord(data.length);
        
        setVal(e.target.value)
        
    }
    return(
        <div class="task1">
            <h3>Responsive Paragraph Word<br /> Counter</h3>
            <textarea value={val} onChange={(e)=>handleChange(e)}/>
            <p>word count : {word}</p>
        </div>
    )
}
export default TextCounter;