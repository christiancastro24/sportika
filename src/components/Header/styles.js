import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 75px;
    width: 100%;
    background-color: #2e2e2e;
    z-index: 2;

    img {
        margin-left: 1rem;
        height: 65px;
        margin-top: 0.5rem;
        cursor: pointer;
    }

    ul {
        display: flex;
        margin-left: auto;
        margin-right: 5rem;
        margin-top: 1rem;
    }
    
    li {
        font-family: 'Orbitron', sans-serif;
        font-weight: 600;
        list-style: none;
        color: #fff;
        margin-left: 3rem;
        margin-top: 1rem;
        cursor: pointer;
    }

    li:hover {
        border-bottom: 1px solid #ddd;
    }
`