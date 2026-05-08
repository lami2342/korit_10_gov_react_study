import { css } from "@emotion/react";

export const box2 = css`
  width: 340px;
  display: flex;
  box-shadow: 0 0 5px #000044;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const inputbox = css`
  margin-bottom: 10px;
  
  & > input {
      outline: none;
    box-sizing: border-box;
    width: 100%;
    padding-bottom: 5px;
    height: 40px;
    padding: 10px;
  }
`;

export const buttonbox = css`
height: 30px;   
width: 100%;
background-color: blue;
align-items: center;
justify-content: center;
color: white;
border-radius: 4px;

:hover{
    background-color: #17177c;
}
:active{
    background-color: #3131af;
}
`