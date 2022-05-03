import styled from "styled-components"

export const ContainerAllContent = styled.main`
    .flecha-voltar {
        height: 34px; 
        margin: 10px 25px; 
        cursor: pointer;
    }

    .footer {
        margin-top: 65px; 
        background-color: ;#f5f4f5;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #f5f4f5;
    flex-wrap: wrap;
    height: 120%;

    .exercicio {
        border: 2.5px solid #f1f5f7;
        box-shadow: 0 0 3pt 2pt rgba(0, 0, 0, 0.15);
        background-color: #fff;
        /* width: 40rem;  */
        margin: -3% auto;
        position: relative;
        top: 30px;
        /* height: 45vh;  */
        padding-bottom: 5px;
        margin: 10px;
        padding: 15px;
        text-align: center;
    }

    .video {
        text-align: center;
    }

    .iframe-video {
        margin: 0 auto;
        text-align: center;
        display: block;
    }


    h3, h4 {
        /* padding: 5rem;  */
        width: 35rem;
        color: #404040;
        padding: 3%;
    }

    .title {
        color: #000;
        padding-left: 7%;
    }
`