<<<<<<< HEAD
import { useRef, useEffect, useState } from 'react'
=======
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
>>>>>>> 19b6e89d972e27111eff49164a5644309456b183

function App() {

  const boxRef = useRef();
<<<<<<< HEAD
  const number = useRef(0);
  const [ n , setN ] = useState(0);

  
  useEffect(()=> {
   console.log(boxRef.current)
   console.log(boxRef.current.classlist)

   boxRef.current.style={
    ...boxRef.current.style,
    width:"100px",
    height:"100px",
    backgroundcolor:"#222"
   }
  // console.log(document.querySelector("#Box"));
})
const handleOnClick=()=>{
  number.current += 10;
  setN(number.current)
  console.log(number.current);
}
  return (
    <>
      <div id='box' className='text' ref={boxRef}>
      </div>
      <h1>
        setN(number.current)
=======
  const num = useRef(0);
  const [ n, setN ] = useState(0);

  useEffect(() => {
    console.log(boxRef.current);
    console.log(boxRef.current.classList);
    
    boxRef.current.style.width = "100px";
    boxRef.current.style.height = "100px";
    boxRef.current.style.backgroundColor = "#222";

    console.log(boxRef.current.style);
    // console.log(document.querySelector("#box"));
  })

  const handleOnClick = () => {
    num.current += 10;
    setN(num.current);
    console.log(num.current);
  }

  return (
    <>
      <div id='box' className='test abc' ref={boxRef}>

      </div>
      <h1>
        {num.current}
>>>>>>> 19b6e89d972e27111eff49164a5644309456b183
      </h1>
      <button onClick={handleOnClick}>증가</button>
    </>
  )
}

export default App
