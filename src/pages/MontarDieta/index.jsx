import axios from "axios"
import { useState } from "react"
import { Container } from "./styles"

export const MontarDieta = () => {

  const [alimentos, setAlimentos] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [nomeAlimento, setNomeAlimento] = useState('')

  const proxy = 'https://cors-anywhere.herokuapp.com/'

  const ProcurarAlimento = () => {
    setCarregando(true)
    setNomeAlimento("")
    axios.get(proxy + `https://caloriasporalimentoapi.herokuapp.com/api/calorias/?descricao=${nomeAlimento}`, {
      headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Content-Type" },
    })
      .then(res => { setAlimentos(res.data); setCarregando(false) })

      .catch(err => { setCarregando(false); alert(err) })
  }

  return (
    <Container>
      <h1>Procure seu alimento</h1>
      <div className="search">
        <input type="search" value={nomeAlimento} placeholder="Procure seu alimento..." onChange={evt => setNomeAlimento(evt.target.value)} />
        <br />
        <button className="btn" disabled={!nomeAlimento} onClick={ProcurarAlimento}>Procurar alimento </button>
      </div>
      {carregando && <h4>CARREGANDO</h4>}
      {alimentos.map(al =>
        <div className="alimentos" key={al.id}>
          <h3>{al.descricao}</h3>
          <h4>{al.calorias}</h4>
          <h4>{al.quantidade}</h4>
          <hr />
        </div>
      )}
    </Container>
  )
}