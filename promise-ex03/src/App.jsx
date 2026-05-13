import { Route, Routes } from "react-router";


function P1() {
  const p1 = Promise.resolve(10)
    .then(n => n * 2)
    .then(n => n + 5)
    .then(n => n.toString() + "원")
    .then(result => console.log(result));

  return p1;
}


// 출력: "25원"
// 과정: 10 → 20 → 25 → "25원"


function App() {

  return (
    <>
      <Routes>
        <Route path="p1" element={<P1/>} />
      </Routes>
    </>
  )
}

export default App;