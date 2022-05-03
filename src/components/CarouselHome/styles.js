import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100vw;
    height: 87vh;
    z-index: -1;
    
  }
  
  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0px auto;
  }
`;