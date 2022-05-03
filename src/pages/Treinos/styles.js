import styled from "styled-components"

export const Container = styled.div`
   
    h1 {
        padding: 1% 2%;
        color: #E31B24;
        font-family: 'Orbitron', sans-serif; 
        font-weight: lighter;
    }

    .not-allowed {
        cursor: not-allowed;
    }

    .img-treinos {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        img {
            height: 300px;
            width: 400px;
            margin: 0.5rem;
            cursor: pointer;
        }
    }

    .portfolioimg{
    position: relative;
    overflow: hidden;
}
.portfolioimg img{
    border-radius: .5rem;
}


.portfoliolink{
    position: absolute;
    bottom: -100%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: rgba(255,255,255,.3);
    border-radius: .5rem;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: .5s;

    h4 {
        color: #fff;
        text-decoration: underline;
    }

    h5 {
        padding: 8px;
    }

}
.portfolioimg:hover .portfoliolink{
    bottom: 0;
}
`