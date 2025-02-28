import React from 'react'
import { useState } from 'react';


export default function TextForm(props) {
    const [text, setText]=useState("Enter text here");
    const hundleUpClick =() =>{
        console.log("UpperCase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const hundleLowClick =() =>{
        console.log("LowerCase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const hundleOnChange =(event) =>{
        console.log("On Change");
        setText(event.target.value)
    }
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
     <div className="mb-3">
        <textarea className="form-control" value={text} onChange={hundleOnChange} id="MyBox" rows="8"></textarea>    
    </div>
    <button className="btn btn-primary mx-3" onClick={hundleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary" onClick={hundleLowClick}>Convert to Uppercase</button>
    </div>
    <div className="container">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minitues Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
