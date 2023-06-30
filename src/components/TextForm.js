import React, { useState } from 'react'




export default function TextForm(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }

    const handleChange = (event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    
  return (
    <>
    <div className="container">
        
  <div className="mb-3">
    <label htmlFor="myBox" className="form-label" style={{ color: props.mode ==="light"? "#1a1a1a":"white"}}><h1>Enter here to analyse</h1></label>
    <textarea type="text" className="form-control" style={{backgroundColor: props.mode ==="light"? "white": "#1a1a1a",  color: props.mode ==="light"? "#1a1a1a":"white"}} id="myBox" value={text} onChange={handleChange}  rows="5"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  
  
  <button onClick= {handleUpClick} className="btn btn-primary">Convert to uppercase</button>
  <button onClick= {handleLoClick} className="btn btn-primary mx-3">Convert to Lowercase</button>
    </div>

    <div className="container my-3" style={{ color: props.mode ==="light"? "#1a1a1a":"white"}}>
    <h2 >Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.08 * text.split(" ").length === 0.08 ? 0 :0.08 * text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p >{text.length>0 ? text : "Enter text to preview here"}</p>
    </div>
    </>
  )
}

//Hooks were introduced for function based components
// Hooks help you to use the features of the class without using them
// Hooks help to change the value of variables without reloading the page