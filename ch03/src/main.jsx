<<<<<<< HEAD
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

    const a = <div>
      <input type="text" />
      <B></B>
      </div>

      function B() {
        return <div>
          <input type="text"/>
        </div>
        }
        
        function App() {
          const [text, setText] = useState('')
          const handleOnChange = (e) => {
            setText(e.target.value)
          }
          return<>
          <input type="text" onChange={handleOnChange}/>
          <h1>출력:{text}</h1>
            <InputGroup/>
            <OutputGroup/>
          </>
          
        }

        function OutputGroup(){
          return <div>
            <h1>
              사용자이름 :
            </h1>
            <h1>
              비밀번호 : 
            </h1>
          </div>
        }
      
        function InputGroup(){
          return<div>
            <LabelInput title={'사용자 이름'} id = {'username'} type={'text'}/>
            <LabelInput title={'비밀번호'} id = {'password'} type={'password'}/>
          
          </div>
        }


        import { useId } from 'react'
        
        function LabelInput({ title, id, type }) {
          const [text, setText] = useState('');
          console.log('LabelInput호출')

          const handleOnChange = (e) => {
            setText(e.target.value);
          }
          const generatedId = useId();
          const inputId = id ? id : generatedId;
        
          const handleOnChange = (e) => {
            console.log(e.target.value);
          }
          return <div>
            <label htmlFor={inputId}>{title}</label>
            <input type={type} id={inputId} onChange={handleOnChange}/>
          </div>
        }
createRoot(document.getElementById('root')).render(
  <App />
=======
import { useState } from 'react';
import { createRoot } from 'react-dom/client'

const a = <div>
    <input type="text" />
    <B></B>
</div>

function B() {
    return <div>
        <input type="text" />
    </div>
}

function App() {
    // let text = "abcd";
    const [ text, setText ] = useState("abcd"); 
    const [ usernameText, setUsernameText ] = useState("");
    const [ passwordText, setPasswordText ] = useState("");

    console.log(text);

    const handleOnChange = (e) => {
        console.log("이게 매번 호출됨");
        setText(e.target.value);
    }

    return <>

        <input type="text" onChange={handleOnChange} />
        <h1>출력: {text}</h1>

        <InputGroup setUsernameText={setUsernameText} setPasswordText={setPasswordText} />
        <OutputGroup usernameText={usernameText} passwordText={passwordText} />
    </>
}

function OutputGroup({ usernameText, passwordText }) {

    return <div>
        <h1>사용자이름: {usernameText}</h1>
        <h1>비밀번호: {passwordText}</h1>
    </div>
}

function InputGroup({ setUsernameText, setPasswordText }) {
    console.log("InputGroup 호출");

    return <div>
        <LabelInput title={'사용자이름'} id={'username'} type={'text'} setText={setUsernameText} />
        <LabelInput title={'비밀번호'} id={'password'} type={'password'} setText={setPasswordText} />
    </div>
}

function LabelInput({ title, id, type, setText }) {
    console.log("LabelInput 호출");

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    return <div>
        <label htmlFor={id}>{title}</label>
        <input type={type} id={id} onChange={handleOnChange} />
    </div>
}

createRoot(document.getElementById('root')).render(
    //JSX
    <App />
>>>>>>> 19b6e89d972e27111eff49164a5644309456b183
)
