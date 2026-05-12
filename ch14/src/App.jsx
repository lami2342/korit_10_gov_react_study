<<<<<<< HEAD
import { useState } from 'react'
import { css } from '@emotion/react'
import * as s  from './styles'


function App() {
const [show,setShow] = useState(false)

const b = 'black'

const box = css `
width: 200px;
height: 100px;
background-color: black
`

const box2 = (isShow) =>{
  return css`
    width: 100px;
    height: 100px;
    background-color: blue;
    opacity: ${isShow ? 1 : 0};
  `;
}
const box3 = (isShow) =>{
  css `
    width: 100px;
    height: 100px;
    background-color: blue;
    opacity: ${isShow ? 1 : 0};
  `;
}
  return (
    <>
      <div css = {box}></div>
      <button onClick={()=> setShow(!show)}>{show ? '숨기기' : '보이기'} </button>
      <div css = {box2(show)}></div>
      <div css = {box3(show)}></div>
      <div css = {s.box4(show)}></div>
      <div css = {s.box5(show)}></div>
=======
import { css } from '@emotion/react'
import { useState } from 'react'
import * as s from './styles';

function App() {
  const [ show, setShow ] = useState(false);
  const b = 'black';

  const box = css`
    height: 100px; 
    background-color: ${b};
  `;

  const box2 = (isShow) => {
    return css`
      width: 100px;
      height: 100px;
      background-color: blue;
      opacity: ${isShow ? '1' : '0'};
    `;
  }

  const box3 = (isShow) => css`
    width: 100px;
    height: 100px;
    background-color: blue;
    opacity: ${isShow ? '1' : '0'};
  `;

  return (
    <>
      <div css={box}></div>
      <button onClick={() => setShow(!show)}>{show ? '숨기기' : '보이기'}</button>
      <div css={box2(show)}></div>
      <div css={box3(show)}></div>
      <div css={s.box4}></div>
      <div css={s.box5}></div>
>>>>>>> 19b6e89d972e27111eff49164a5644309456b183
    </>
  )
}

export default App
