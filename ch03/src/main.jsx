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
)
