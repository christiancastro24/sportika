import { useState } from "react";
import { Container, Conteudo, Main } from "./styles";
import { TabelaResult } from "./styles"

export const Imc = () => {
  const [idade, setIdade] = useState('')
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState(false)
  const [mostrarResultado, setMostrarResultado] = useState('')

  const resultadoImc = () => {
    const result = (peso / (altura * altura)).toFixed(2)
    setResultado(true)
    setMostrarResultado(result)
  }

  const styleBege = { width: "15rem", margin: "0 auto", height: "20rem", fontSize: "1.3rem", borderRadius: "10px", backgroundColor: "#F0E68C", textAlign: "center", padding: "50px" }
  const styleVermelho = { width: "15rem", margin: "0 auto", height: "20rem", fontSize: "1.3rem", borderRadius: "10px", backgroundColor: "#B22222", textAlign: "center", padding: "50px" }

  const enabled = idade === '' || peso === '' || altura === ''

  return (
    <Conteudo>
      <Main>
        <Container>
          <h1>Calcular seu IMC</h1>
          <div className="btn-men-women">
            <div class="switch-button">
              <input class="switch-button-checkbox" type="checkbox"></input>
              <label class="switch-button-label" for=""><span class="switch-button-label-span">&nbsp;HOMEM</span></label>
            </div>
          </div>

          <label>Idade</label>
          <input type="number" value={idade} placeholder="Ex: 35" onChange={evt => setIdade(evt.target.value)} /> <br />
          <label>Peso</label>
          <input type="number" value={peso} placeholder="Ex: 62.5" onChange={evt => setPeso(evt.target.value)} /> <br />
          <label>Altura</label>
          <input type="number" value={altura} placeholder="Ex: 1.85" onChange={evt => setAltura(evt.target.value)} /> <br />


          <button disabled={enabled} className="btn-calcular" onClick={resultadoImc}>Calcular</button>
        </Container>

        <>
          <div className="parent">
            <TabelaResult className="tabela">
              <tr>
                <td className="titulo">IMC</td>
                <td className="titulo">Classificação</td>
              </tr>
              <hr />

              <tr className="magreza">
                <td>Menor que 18.5</td>
                <td>Magreza</td>
              </tr>


              <tr className="pesoNormal">
                <td>Entre 18.5 e 24.9</td>
                <td>Peso Normal</td>
              </tr>


              <tr className="sobrePeso">
                <td>Entre 25 e 29.9</td>
                <td>SobrePeso</td>
              </tr>


              <tr className="obesidade">
                <td>Entre 30.0 e 39.9</td>
                <td>Obesidade</td>
              </tr>


              <tr className="obesidadeGrave">
                <td>Maior que 40.0</td>
                <td>Obesidade Grave</td>
              </tr>



            </TabelaResult>
          </div>

          {resultado &&
            <>
              {mostrarResultado <= 18.50 &&
                <div className="resultadoRoxo"><span>RESULTADO: {mostrarResultado}</span>
                  <p>De acordo com a Organização Mundial da Saúde, seu IMC está abaixo do recomendado.</p>
                </div>
              }

              {mostrarResultado > 18.50 && mostrarResultado <= 24.99 &&
                <div className="resultadoVerde"><span>RESULTADO: {mostrarResultado}</span>
                  <p>De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal.</p>
                </div>
              }

              {mostrarResultado > 24.99 && mostrarResultado <= 29.99 &&
                <div className="resultadoBranco"><span>RESULTADO: {mostrarResultado}</span>
                  <p>De acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado.</p>
                </div>
              }

              {mostrarResultado > 29.99 && mostrarResultado <= 39.99 &&
                <div style={styleVermelho} className="resultadoVermelho"><span style={{ color: "#fff" }}>RESULTADO: {mostrarResultado}</span>
                  <p>De acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado.</p>
                </div>
              }

              {mostrarResultado > 39.99 &&
                <div style={styleBege} className="resultadoBege"><span style={{ color: "#fff" }}>RESULTADO: {mostrarResultado}</span>
                  <p>De acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado.</p>
                </div>
              }
            </>
          }
        </>

      </Main>
      <div className="sobre-imc">
        <h3>Cálculo IMC</h3>
        <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
        <p>O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.</p>
        <p>Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Importante: siga os exemplos e use pontos como separadores.</p>
        <div className="iframe">
          <iframe width="900" title="Video" height="500" className="iframe-video" src="https://www.youtube.com/embed/PzvgUViYHPQ"></iframe>
        </div>
      </div>
    </Conteudo>

  )
}