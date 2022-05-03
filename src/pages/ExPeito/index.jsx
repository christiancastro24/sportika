import { ContainerAllContent } from "../ExCostas/styles"
import { Container } from "./styles"
import { useHistory } from "react-router-dom"

import { BotaoHome } from "../../components/Imagens"
import { useTreinoContext } from "../../context/treinos"

export const ExPeito = () => {

    const { exPeito, loading } = useTreinoContext();
    const history = useHistory();

    return (
        <ContainerAllContent>
            {BotaoHome.map(flecha => (
                <img src={flecha.img} alt={flecha.alt} title={flecha.info} className="flecha-voltar" onClick={() => history.push(flecha.path)} />
            ))}
            <Container>
                {loading && <h1>Carregando conteúdo...</h1>}
                {exPeito.map(peito => (
                    <section key={peito.id} className="exercicio">
                        <h1 className="title">{peito.title}</h1>
                        <div>
                            <h3 className="video">Demonstração</h3>
                            <iframe width="423" title="Video" height="300" className="iframe-video" src={peito.video}></iframe>
                        </div>
                    </section>
                ))}
            </Container>
            <div className="footer"></div>
        </ContainerAllContent>
    )
}