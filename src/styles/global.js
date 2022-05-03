import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
  }
  
  body {
    background-color: var(--white);
    color: var(--black);
    font-size: 1rem;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
  }

  input {
    color: #000;
  }
  
  select {
    outline: none;
  }

  button {
    cursor: pointer;
    font-family: 'Roboto', serif;
  }

  ::-webkit-scrollbar{
  width: 10px;
  height: 10px;
  }

  ::-webkit-scrollbar-thumb{
  background: var(--black);
  border-radius: 30px;
  }

  ::-webkit-scrollbar-thumb:hover{
  background: var(--gray);
  }

  ::-webkit-scrollbar-track{
  background: var(--orange);
  border-radius: 30px;
  box-shadow: inset 0px 0px 0px 0px #F0F0F0;
  }
`;