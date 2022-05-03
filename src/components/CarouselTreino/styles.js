import styled from "styled-components";


export const MainContainer = styled.div`
    width: 98vw;
    height: 40vh;
    margin-bottom: 4%;
    font-family: 'Halant';
    margin: 0 auto;

    img {
            height: 280px;
            width: 400px;
            margin: 0.5rem;
            cursor: pointer;
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
        margin-bottom: -34%;
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