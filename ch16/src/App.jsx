import { useEffect } from 'react';
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router'

function Home() {
  return <h1>
    홈 화면 입니다.
  </h1>
}
function About() {
  return <h1>소개 화면입니다.</h1>
}
function Product() {
  const [productName, setProductName] = useState("");
  const [productName1, setProductName1] = useState("");

  useEffect(() => {
    console.log("마운트");
    return () => {
      console.log("언마운트");
    }
  }, [productName1, setProductName1])

  return <>
    <h1>상품 화면 입니다</h1>
    <input type="text" value={productName} onChange={(e) => setProductName} />
    <input type="text" value={productName1} onChange={(e) => setProductName1} />
  </>
}

function App() {
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    navigate(e.target.value)
  }

  const [num, setNum] = useState(0);

  return (
    <>
      <h1>
        <button onClick={() => setNum}></button>
      </h1>
      <nav>
        <button value={"/p1"} onClick={handleOnClick}>1페이지</button>
        <button value={"/p2"} onClick={handleOnClick}>2페이지</button>
        <button value={"/p3"} onClick={handleOnClick}>3페이지</button>
        <a href="/q1">1페이지</a>
        <a href="/p2">2페이지</a>
        <a href="/p3">3페이지</a>
      </nav>
      <Routes>
        <Route path='/p1' element={<Home />} />
        <Route path='/p2' element={<About />} />
        <Route path='/p3' element={<Product />} />
      </Routes>
    </>
  )
}

export default App
