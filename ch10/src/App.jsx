import { useEffect } from 'react';
import { useState } from 'react'

function App() {
<<<<<<< HEAD
  const [state1, setState1] = useState(10);
  const [state2, setState2] = useState(20);
  const [state3, setState3] = useState(0);
  const [clicked, setClicked] = useState(false);
  const[isFetched, setFetched] = useState(false);

  const handleOnClick = () => {
    setState1(state1 * 10);//state1 == 100
  setClicked(true)
  }

  useEffect(() => {
    if (clicked){
    setState2(state1 + state2)//state2 == 120
  }
}, [state1])
 
useEffect(() => {
  if (clicked){
    setState3(state1 + state2)//state3 == 220
    setClicked(false)
    setFetched(false);
}
}, [state2])
=======
  const [ state1, setState1 ] = useState(10);
  const [ state2, setState2 ] = useState(20);
  const [ state3, setState3 ] = useState(0);
  const [ clicked, setClicked ] = useState(false);
  const [ isFetching, setFetching ] = useState(false);

  const handleOnClick = () => {
    setState1(state1 * 10);     //state1 == 100
    setFetching(true);
    setClicked(true);
  }

  useEffect(() => {
    if (clicked) {
      setState2(state1 + state2); //state2 == 120
    }
  }, [state1]);

  useEffect(() => {
    if (clicked) {
      setState3(state1 + state2); //state3 == 220
      setClicked(false);
      setFetching(false);
    }
  }, [state2]);
>>>>>>> 19b6e89d972e27111eff49164a5644309456b183

  return (
    <>
      <button onClick={handleOnClick}>실행</button>
      {
<<<<<<< HEAD
        isFetched && <h1>패치중...</h1>|| <>
      <h1>{state1}</h1>
      <h1>{state2}</h1>
      <h1>{state3}</h1>
      </>
=======
        isFetching && <h1>패치중...</h1> || <>
          <h1>{state1}</h1>
          <h1>{state2}</h1>
          <h1>{state3}</h1>
        </>
>>>>>>> 19b6e89d972e27111eff49164a5644309456b183
      }
    </>
  )
}

export default App
