import { css } from "@emotion/react";

export const label =css`
position: relative;
display: block;
width: 100%;
font-size: 13px;
font-weight: 500;
color: #444444;


& > input{
    margin: 5px 0 10px;
    box-sizing: border-box;
    outline: none;
    border-radius: 6px;
    border: 1px solid #dbdbdb;
    padding: 10px 50px 10px 15px;
    width: 100%;
    font-size: 18px;
    color: #222222;
    
    &:focus{
        border-color:#2989d8 ;
        box-shadow: 0 0 5px 5px #2989d822;
    }
}

`;



export const hidden = css`
position: absolute;
transform: translateY(-40%);
top: 50%;
right: 20px;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
font-size: 16px;
cursor: pointer;
`

export const agree=css`
margin: 20px 0 ;
font-size: 14px;
font-weight: 400;
`
export const coloring =css`
color: #ff0000;
`
export const signupButton =css`
box-sizing: border-box;
border: 1px solid #cccccc;
border-radius: 6px;
justify-content: center;
align-items: center;
gap: 10px;
display: flex;
padding: 10px;
width: 100%;
font-size: 16px;
background-color: transparent;
font-weight: 500;
transition: all 0.1s ease-in-out;
cursor: pointer;

&:hover{
    background-color: #e2f770;
}

&:active{
    background-color: #daf153;
    transform: scale(97%);
}
`