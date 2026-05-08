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
    box-sizing: border-box;
    outline: none;
    border: 1px solid #888;
    border-radius: 4px;
    padding: 10px;
    width: 100%;
    height: 40px;
    cursor: pointer;

    &:hover{
      box-shadow: 0 0 3px #000033;
    }
    &:active{
      box-shadow: 0 0 3px #000033 inset; 
    }
    &:focus{
     box-shadow: 0 0 3px #4fdb79 inset;
    }
  }
`;

export const buttonbox = css`
&>button{

  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  width: 100%;
  height: 30px;   
  background-color: #3232ff;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;

  &:hover{
    background-color: #0f0fb3;
  }
  &:active{
    background-color: #0a0a8b;
  }
  &:disabled{
background-color: #aaa8a8;
cursor: default;
  }
}
  `