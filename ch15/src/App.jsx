import { useState } from 'react'
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
        </div>
      </div>
    </>
  )
}

export default App
