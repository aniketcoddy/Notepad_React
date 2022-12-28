import React, { useState } from "react";

export default function Textform(props) {

  const [myStyle , setMyStyle] = useState(
   {
          
          color:"black",
        backgroundColor:"White"
   })

   const [btntext , setBtnText] = useState("Dark mode");
     

  const handleMode=()=>{
    if(myStyle.color === "black"){
     setMyStyle(
      {
        color:"white",
          backgroundColor:"black"
         
 }
 
 
     )
     setBtnText("Light mode")
     document.body.style.backgroundColor = 'black';
     document.title="Notepad-Dark"
}else{
  setMyStyle(
    {
      color:"black",
        backgroundColor:"white"
}
   )
   setBtnText("Dark mode")
   document.body.style.backgroundColor = 'white';
   document.title="Notepad-Light"
}
   }

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleUpClick2 = () => {
    setText(text.toLowerCase());
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const clearOnClick = () => {
    setText("");
  };
  const extraScape = () => {
  let space = text.split(/ [ ]+ /);
    setText(space.join(" "))
  };
  const [text, setText] = useState(" "); 

  

  return (
    <>
      <div className="container my-5" style={myStyle}>
        <h1>{props.heading}</h1>
        <br />
        <div className="mb-3" >
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleonchange}
            rows="8"
            style={myStyle}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-3"
          type="submit"
          onClick={handleUpClick} >

          Change to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-3 "
          type="submit"
          onClick={handleUpClick2}>
          Change to LowerCase
        </button>
        <button
          className="btn btn-primary mx-1 my-3"i
          type="submit"
          onClick={clearOnClick}>
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-1 my-3"
          type="submit"
          onClick={extraScape}>
          Remove Space
        </button>
        <div className="form-check form-switch" style={myStyle} onClick={handleMode}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btntext}</label>
</div>
      </div>
      <div className="container my-4" style={myStyle}>
        <h3>Number Of Words Typed-:{text.split(" ").length}</h3>
        <p>the number of characters in the area are-{text.length}</p>
        <p>you need {0.008*text.split(" ").length} min to read this</p>
        <h3> Preview:-</h3>
        <h6> {text}</h6>
        </div>
    </>
  );
}
