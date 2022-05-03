import { Container } from "./styles"
import { useHistory } from "react-router"
import { ImagensTreinos } from "../../components/Imagens"

export const Treinos = () => {

    const history = useHistory();

    return (
        <Container>
            <h1>Nossos Treinos</h1>
            <div className="img-treinos">
                {ImagensTreinos.map(treino => (
                    <>
                        <div class="portfolioimg" id={treino.id}>
                            <img src={treino.img} alt={treino.alt} />
                            <div class="portfoliolink">
                                <h4 class="portfoliolink-name">Série de exercícios para o desenvolvimento de {treino.info}<br />
                                    {treino.completed ?
                                        <h5
                                            onClick={() => history.push(treino.path)}>Veja mais!</h5>
                                        :
                                        <h5 className="not-allowed" title="Treinos em processos...." disabled={true}
                                            onClick={() => history.go(0)}>Veja mais!</h5>
                                    }
                                </h4>

                            </div>
                        </div>
                    </>
                ))}
            </div>
        </Container>
    )
}