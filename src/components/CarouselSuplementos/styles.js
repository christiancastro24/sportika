import styled from "styled-components";


export const MainContainer = styled.div`
    width: 97vw;
    height: 40vh;
    font-family: 'Halant';
    margin: 1rem auto !important;
    background-color: #111111;

    h1 {
        padding-top: 35% !important;
    }
 

    img {
        cursor: pointer;
        width: 100%;
        height: 380px;
        margin: 7px;
    }
         
        h2{
            font-size: 40px;
            font-weight: 600;
            padding: 3% 5%;
            
    
        }
        p{
        font-size: 18px;
        padding: 0% 5%;
        margin-bottom: 5%;
        font-weight: bold;
        
        }
    
    .BrainhubCarousel__arrows {
        background-color: var(--red);
    &:hover{
        background-color: var(--red);
        opacity: 0.8;
        }
    }
    @media(min-width: 768px){
        background-size: cover;
        background-repeat: no-repeat;
        font-family: 'Halant';
        h2{
            font-size: 45px;
            padding: 2% 3%;
    
        }
        p{
            font-size: 18px;
            padding: 0% 3%;
            margin-top: -3%;
            font-weight: bold;
        }
    }
`