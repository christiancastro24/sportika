import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #111111;
    /* overflow-x: hidden;  */

    .galeria_produtos {
    
        .insta-logo {
            margin: 15px 50px;
            height: 60px;
        }
    }

    h1 {
        color: #fff;
        padding: 30px;
        font-family: 'Orbitron', sans-serif;
        letter-spacing: 1.2px;
    }

    .prods {
        display: grid;
        justify-content: center;
        place-items: center;
        grid-template-columns: 1fr 1fr 1fr;
        flex-wrap: wrap; 
        margin-top: 0rem;
        background-color: #111111;


        img {
            height: 450px;
            width: 520px;
            margin: 10px 0px;
        }
    }

    .suplementacao {
        background-color: #111111;
        width: 100%;
        h1 {
            padding-top: 33.5%;
            margin: 5px;
        }
    }

    .rodape {
        display: flex;
        height: 10rem;
        margin-top: -1rem;
        background-color: #111111;

        p {
            color: #fff;
            font-weight: bold;
            text-align: center;
            margin: auto;
            padding-top: 8rem;
        }
    }
    
`