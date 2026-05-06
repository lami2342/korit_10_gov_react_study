import { useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [content, setContent] = useState('')
  const [text2, setText2] = useState('')
  const [content2, setContent2] = useState('')


  const handleOnClick = (e) => {
    setContent(text);
    setContent2(text2);
  }

  const handleOnChange = (e) => {
    setText(e.target.value)
  }
  const handleOnChange2 = (e) => {
    setText2(e.target.value)
  }


  return (
    <>

      <input type="text" onChange={handleOnChange} />
      <input type="text" onChange={handleOnChange2} />

      <button onClick={handleOnClick}>출력</button >

      <h1>내용:{content}</h1>
      <h1>내용:{content2}</h1>
    </>
  )
}

export default App
