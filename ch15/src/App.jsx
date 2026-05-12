import { useState } from 'react'
<<<<<<< HEAD
import { css } from '@emotion/react'
import * as s from './style'


function App() {

  return (
    <>
      <div css={s.box2}>
        <div css={s.inputbox}>
          <input type="text" name="username" id="un" placeholder='사용자 이름' />
        </div>
        <div css={s.inputbox}>
          <input type="password" name="password" id="pw" placeholder='비밀번호' />
        </div>
        <div css={s.buttonbox}>
          <button disabled={true}>사용자 정보 등록</button>
=======
import * as s from "./styles";

function App() {
  

  return (
    <>
      <div css={s.card}>
        <div css={s.inputBox}>
          <input type="text" />
        </div>
        <div css={s.inputBox}>
          <input type="text" />
        </div>
        <div css={s.buttonBox}>
          <button disabled={false}>사용자 정보 등록</button>
>>>>>>> 19b6e89d972e27111eff49164a5644309456b183
        </div>
      </div>
    </>
  )
}

export default App
