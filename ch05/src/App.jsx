import { useState } from 'react'

function App() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");

  const handleOnChange = (e) => {

    console.log(e.target.name);
    console.log(e.target.value);
    switch (e.target.name) {
      case "input1":
        setValue(e.target.value)
        break;
      case "input2":
        setValue2(e.target.value)
        break;
      case "input3":
        setValue3(e.target.value)
        break;
      case "input4":
        setValue4(e.target.value)
        break;
      case "input5":
        setValue5(e.target.value)
        break;
    }
  }

  const [inputValue, setInputValue] = useState({
    input1:"",
    input2:"",
    input3:"",
    input4:"",
    input5:"",
  });

const handleOnChange2 = (e) => {
  setInputValue({
    ...inputValue,
    [e.target.name]:e.target.value,
  })
}

  return (
    <>

      <input type="text" name="input1" value={value} onChange={handleOnChange} />
      <input type="text" name="input2" value={value2} onChange={handleOnChange} />
      <input type="text" name="input3" value={value3} onChange={handleOnChange} />
      <input type="text" name="input4" value={value4} onChange={handleOnChange} />
      <input type="text" name="input5" value={value5} onChange={handleOnChange} />

      <h1>출력1:{value}</h1>
      <h1>출력2:{value2}</h1>
      <h1>출력3:{value3}</h1>
      <h1>출력4:{value4} </h1>
      <h1>출력5:{value5} </h1>

      <hr />

 {/* 두 번째 그룹 */}
<input type="text" name="input1" value={inputValue.input1} onChange={handleOnChange2} />
<input type="text" name="input2" value={inputValue.input2} onChange={handleOnChange2} />
<input type="text" name="input3" value={inputValue.input3} onChange={handleOnChange2} />
<input type="text" name="input4" value={inputValue.input4} onChange={handleOnChange2} />
<input type="text" name="input5" value={inputValue.input5} onChange={handleOnChange2} />

<h1>출력1:{inputValue.input1}</h1>
<h1>출력2:{inputValue.input2}</h1>
<h1>출력3:{inputValue.input3}</h1>
<h1>출력4:{inputValue.input4}</h1>
<h1>출력5:{inputValue.input5}</h1>

    </>
  )
}

export default App
