<<<<<<< HEAD
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
=======
import { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'

function Home() {
    const [ name, setName ] = useState("");
    return <>
        <h1>{name}님의 홈 화면입니다.</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </>
}

function About() {
    useEffect(() => {
        console.log("마운트");
        return () => {
            console.log("언마운트");
        }
    }, []);

    return <h1>소개 화면입니다.</h1>
}

function Product() {

    const [ productName, setProductName ] = useState("");
    const [ productName2, setProductName2 ] = useState("");

    useEffect(() => {
        console.log("마운트");
        return () => {
            console.log("언마운트");
        }
    }, [productName, productName2]);

    return <>
        <h1>상품 소개 화면입니다.</h1>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        <input type="text" value={productName2} onChange={(e) => setProductName2(e.target.value)} />
    </>
}

function App() {
    const navigate = useNavigate();
    const [ num, setNum ] = useState(0);

    const handleOnClick = (e) => {
        navigate(e.target.value);
    }

    return (
        <>
            <h1>{num}</h1>
            <button onClick={() => setNum(num + 1)}>증가</button>
            <nav>
                <button value={"/p1"} onClick={handleOnClick}>1페이지</button>
                <button value={"/p2"} onClick={handleOnClick}>2페이지</button>
                <button value={"/p3"} onClick={handleOnClick}>3페이지</button>
                <a href="/p1">1페이지</a>
                <a href="/p2">2페이지</a>
                <a href="/p3">3페이지</a>
                <Link to={"/p1"}>1페이지</Link>
                <Link to={"/p2"}>2페이지</Link>
                <Link to={"/p3"}>3페이지</Link>
            </nav>
            <Routes>
                <Route path='/p1' element={<Home />} />
                <Route path='/p2' element={<About />} />
                <Route path='/p3' element={<Product />} />
            </Routes>
        </>
    )
>>>>>>> 19b6e89d972e27111eff49164a5644309456b183
}

export default App
