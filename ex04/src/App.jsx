import { Routes, Route } from 'react-router'

function P1() {
  const p1 = Promise.resolve("hello")
    .then(str => str.toUpperCase())
    .then(str => {
      throw new Error("강제 에러 발생!");
    })
    .then(str => console.log("여기 실행될까?"))
    .catch(str => console.log("에러잡음: " + str))
    .finally(() => console.log("항상 동작"))

}



function App() {

  return (
    <>
      <Routes>
        <Route path='' element={<P1 />} />
      </Routes>
    </>
  )
}

export default App;