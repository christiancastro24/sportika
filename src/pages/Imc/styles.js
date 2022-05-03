import styled from "styled-components"

export const Conteudo = styled.div`
  
    .iframe {
     margin: 2%;
    }
  
    h3 {
      margin: 20px 0;
    font-size: 24px;
    color: #1f5eaf;
    font-weight: 700;
    padding-left: 35px;
    }
    
    .sobre-imc p {
      margin: 2%;
      width: 52%;
      font-size: 20px;
      color: #707070;
      font-weight: 400;
    }

`

export const Main = styled.div`
  display: flex; 
  align-items: center;


  .resultadoRoxo {
  margin: 0 auto; 
  font-size: 1.3rem; 
  width: 15rem; 
  height: 20rem;
  padding: 0.5rem;
  border-radius: 10px; 
  background-color: #6959CD;
  text-align: center;
  padding: 50px;

  span {
    color: #fff;
  }
}

.resultadoVerde {
  margin: 0 auto; 
  font-size: 1.3rem; 
  width: 15rem; 
  height: 20rem;
  padding: 0.5rem;
  border-radius: 10px; 
  background-color: #8FBC8F;
  text-align: center;
  padding: 50px;

  span {
    color: #fff;
  }
}

.resultadoBranco {
  margin: 0 auto; 
  font-size: 1.3rem; 
  width: 15rem; 
  height: 20rem;
  padding: 0.5rem;
  border-radius: 10px; 
  background-color: #ccc;
  text-align: center;
  padding: 50px;

  span {
    color: #000;
  }

  .resultadoVermelho {
  margin: 0 auto; 
  font-size: 1.3rem; 
  width: 15rem; 
  height: 20rem;
  padding: 0.5rem;
  border-radius: 10px; 
  background-color: #B22222;
  text-align: center;
  padding: 50px;

  span {
    color: #fff;
  }
}

.resultadoBege {
  margin: 0 auto; 
  font-size: 1.3rem; 
  width: 15rem; 
  height: 20rem;
  padding: 0.5rem;
  border-radius: 10px; 
  background-color: #F0E68C;
  text-align: center;
  padding: 50px;

  span {
    color: #000;
  }
}
}

`

export const Container = styled.div`
  margin: 3% 5%;
  width: 30%;
  padding: 10px;
  border: 2px solid green;
  display: flex;
  flex-direction: column;

  .switch-button {
  background: #0095f5;
  border-radius: 35px;
  overflow: hidden;
  width: 260px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  color: #000;
  position: relative;
  padding-right: 120px;
  position: relative;
  left: 27%;

  &:before {
    content: "MULHER";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    pointer-events: none;
  }

  &-checkbox {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;

    &:checked + .switch-button-label:before {
      transform: translateX(120px);
      transition: transform 300ms linear;
    }

    & + .switch-button-label {
      position: relative;
      padding: 15px 0;
      display: block;
      user-select: none;
      pointer-events: none;

      &:before {
        content: "";
        background: #fff;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 30px;
        transform: translateX(0);
        transition: transform 300ms;
      }

      .switch-button-label-span {
        position: relative;
      }
    }
  }
}
  
  h1 {
    text-align: center;
    padding: 2%;
  }

  label {
    text-align: left !important;
    padding-left: 35px;
    padding-top: 12px;
    margin: 1%;
  }
  input {
    width: 80%;
    height: 2.7rem;
    border: 2px solid rgba(0, 0, 0, 0.5);
    margin: 10px auto;
  }

  .btn-men-women button {
    margin-left: 75px;
  }

  .btn-men-women button:checked {
    background-color: #2px solid green;
  }

  .btn-calcular {
    width: 70%;
    margin: 0 auto;
    border-radius: 5px;
    background: #e0607a;
    box-shadow: 0 2px 0 #8c1b32;
    text-decoration: none;
    color: #fff;
    font-size: 1.125rem;
    padding: 10px 14px;
    font-family: Helvetica,Arial,sans-serif;
    transition: background .2s ease;
  }

  button {
    width: 10rem;
    height: 2.7rem;
    font-size: 0.98rem;
    font-weight: bold;
    border: 2px solid #d3d2d2;
    color: #000;
    font-family: "Helvetica Neue", "Helvetica"
    background-color: #003153;
    border-radius: 5px;
    margin: 5px 2px;
    text-align: center;
  }
`

export const TabelaResult = styled.table`
  margin-left: 2rem;
  width: 40rem;
  height: 33.5rem;
  border: 5px solid rgb(226, 213, 213);
  border-collapse: no-collapse;

.magreza {
  background-color: #6959CD;
  
  td {
    color: #fff;
    font-weight: bold;
  }
}

.pesoNormal {
  background-color: #8FBC8F;

  td {
    color: #fff;
    font-weight: bold;
  }
} 

.sobrePeso {
  background-color: #F5F5F5;
}

.obesidade {
  background-color: #B22222;

  td {
    color: #fff;
    font-weight: bold;
  }
}

.obesidadeGrave {
  background-color: #F0E68C;

}

td {
  color: #000;
}

.titulo {
  background-color: #0095;
}



`