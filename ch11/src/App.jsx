import { useRef, useEffect, useState } from 'react'

function App() {

  const boxRef = useRef();
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
      </h1>
      <button onClick={handleOnClick}>증가</button>
    </>
  )
}

export default App
