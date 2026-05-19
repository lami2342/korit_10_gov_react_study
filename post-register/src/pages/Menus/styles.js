import { css } from "@emotion/react";

export const table = css`
box-sizing: border-box;
border: 1px solid #dbdbdb;
border-collapse: collapse;
width: 100%;
height: 100%;
overflow: auto;


& th, & td {
    border: 1px solid #dbdbdb;
    padding: 5px 10px;
}

`;
