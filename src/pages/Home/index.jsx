import { CarouselBanner } from "../../components/CarouselHome"
import { Container } from "./styles"
import logoinsta from "../../assets/images/insta-logo.png"
import { CarouselTreinos } from "../../components/CarouselTreino"
import { CarouselSuplementos } from "../../components/CarouselSuplementos"

// Componente de imagens de suplementos
import { ImagensSuplementos } from "../../components/Imagens"

export const Home = () => {
    return (
        <Container>
            <CarouselBanner />
            <div className="galeria_produtos">
                <img src={logoinsta} alt="logo-insta" className="insta-logo" />
                <div className="prods">
                    {ImagensSuplementos.map(treino => (
                        <div class="portfolioimg" id={treino.id}>
                            <img src={treino.img} alt={treino.alt} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="treino">
                <h1>Treinos</h1>
                <CarouselTreinos />
            </div>

            <div className="suplementacao">
                <h1>Suplementos</h1>
                <CarouselSuplementos />
            </div>

            <footer className="rodape">
                <p>Copyright 2021. Sportika Export, Inc. All Rights Reserved.</p>
                <p>Dev Christian Silveira | CSC WEBS.</p>
            </footer>
        </Container>
    )
}