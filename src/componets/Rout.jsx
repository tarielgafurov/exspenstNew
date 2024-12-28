import React, { useRef, useState } from 'react'

const Rout = () => {

  const [text,setText] = useState("")

  console.log(text);
  
  const test =  useRef()

  console.log(test.current);
  
  const clickHandler = ()=>{
    console.log(test.current.value);
}
 const inputHandler = (e)=>{
     setText(e.target.value.length >5);
     
 }


  return (
    <div>
       <h1 ref={test}>Hello USEREF</h1>
       <button disabled={true} onClick={clickHandler}>clcik</button>
       <input style={{outline:"none",border: text===false?"1px solid red":"1px solid green"}} onChange={inputHandler} type="text" />
       <h2>{text}</h2>
    </div>
  )
}

export default Rout


// hook  ---  useRef()

// const h1 = document.getElementById("h1")
// console.log(h1);
// h1.style.color = "red"


