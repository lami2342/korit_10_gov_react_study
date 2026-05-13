import { css } from "@emotion/react";

export const layout = css`
display: flex;
width: 100%;
height: 100%;
`;

export const title = css`
box-sizing: border-box;
border: 1px solid #dbdbdb;
color: #c5c5c5;
gap: 8px;
width: fit-content;
align-items: center;
border-radius: 40px;
padding: 5px 15px;
font-size: 12px;
font-weight: 500;
background-color: #333333;
cursor: default;

`;


export const left = css`

flex-direction: column;
width: 43%;
height: 100%;
display: flex;
justify-content: flex-end;
background-color: #11112a;
padding: 0 10px;
`;
export const right = css`
flex-grow: 1;
padding: 30px;

&> header {
        &>h1{
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: default;
            font-size: 16px;
            font-weight: 600;
            
            
            &> svg{
            color: #34c767;
        }
    }
}

`;

export const description = css`
margin: 20px 0 10px;
display: flex;
flex-direction: column;
color: #c5c5c5;
font-size: 24px;
font-weight: 500;
cursor: default;
`;

export const description2 = css`
display: flex;
flex-direction: column;
color: #c5c5c5;
font-size: 13px;
cursor: default;
`;
