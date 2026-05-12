<<<<<<< HEAD
import { useState, useEffect } from 'react'


function App() {
  const [currentId, setCurrentId] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);



  const handleAddOnClick = () => {
    setCurrentId(currentId + 1)
=======
import { useEffect, useState } from 'react'

function App() {
  // const [ data, setData ] = useState([1,2,3,4,5,5]);
  const [ currentId, setCurrentId ] = useState(0);
  const [ inputValue, setInputValue ] = useState("");
  const [ data, setData ] = useState([]);

  const handleAddOnClick = () => {
    setCurrentId(currentId + 1);
>>>>>>> 19b6e89d972e27111eff49164a5644309456b183
  }

  useEffect(() => {
    console.log("유즈이펙트 호출")
    if (currentId !== 0) {
<<<<<<< HEAD
      setData([...data, { id: currentId, num: inputValue }])
    }
  }, [currentId])
  
  console.log(currentId);
  console.log(data);

  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleAddOnClick}>추가</button>
      <ul>
        {data.map((d, index) => <li key={d.id}>{d.num}</li>)}

=======
      setData([...data, {id: currentId, num: inputValue}]);
    }
  }, [currentId]);

  console.log(currentId);
  console.log(data);
  
  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={handleAddOnClick}>추가</button>
      <ul>
        {data.map((d, index) => <li key={d.id}>{d.num}</li>)}
>>>>>>> 19b6e89d972e27111eff49164a5644309456b183
      </ul>
    </>
  )
}

export default App
