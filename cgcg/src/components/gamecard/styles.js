import { css } from "@emotion/react";

export const scene =  css`
perspective:800px;
width: 160px;
height: 220px;
cursor: pointer;

`;

export const layout = (isOpen) => css`
position: absolute;
width: 100%;
height: 100%;
transform-style: preserve-3d;
transition: all 0.3s ease-in-out;
box-shadow: 0 0 10px #ffffff88;
border-radius:8px;
transform: ${isOpen ? "rotateY(180deg)" : "rotateY(0deg)"};

`

export const front = css`
    position: absolute;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: white;
    backface-visibility: hidden;
    transform: rotateY(180deg);


`;
export const back = css`
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 100%;
    background-color: #ffe2d7;
    backface-visibility: hidden;
border-radius: 8px;
    cursor: pointer;
    

    &:hover {
        transform: scale(105%);
    }
`;

export const container = css`
    border-radius: 8px;
    width: 100%;
    height: 100%;
     background-image:
    linear-gradient(90deg, rgba(200,0,0,.5) 50%, transparent 25%),
    linear-gradient( rgba(200,0,0,.5) 50%, transparent 25%);
  background-size: 50px 50px;
`;