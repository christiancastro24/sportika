import styled from "styled-components"

export const Container = styled.main`
  overflow-x: scroll 40rem;


  input {
    height: 3.5rem;
    font-size: 1rem;
    width: 40%;
    margin: 2% 5%;
    border: 1px solid #d2d4d5;
    padding-left: 5px;
  }

  .search {
    display: flex;
    align-items: center;
  }

  h1 {
    padding: 0.5rem;
  }

  .btn {
    background-color: #003153;
    border-radius: 5px;
  }

  button {
    width: 13rem;
    height: 2.7rem;
    font-size: 0.98rem;
    font-weight: bold;
    border: 2px solid #d3d2d2;
    color: #fff;
    font-family: "Helvetica Neue", "Helvetica"
  }

  .alimentos {
    h3 {
      color: #0066EE;
    }

    gap: 15px;
    text-align: left;
    margin: 1% 5%;
    border-bottom: 2px solid #d4d5f5;
    width: 50%;
  }
`