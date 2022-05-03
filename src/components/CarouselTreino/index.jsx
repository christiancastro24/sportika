// Componente de imagens de treinos
import { ImagensTreinos } from "../../components/Imagens"

//FUNCTIONAL
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useState, useEffect } from 'react'

//STYLE
import { MainContainer } from './styles'
import { useHistory } from "react-router";


export const CarouselTreinos = ({ id }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  const history = useHistory();

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <MainContainer id={id}>
          <Carousel
            plugins={[
              'infinite',
              'arrows',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 4
                }
              },
            ]}
          >
            {ImagensTreinos.map(treino => (
              <div class="portfolioimg" id={treino.id}>
                <img src={treino.img} alt={treino.alt} onClick={() => history.push(treino.path)} title={treino.info} />
              </div>
            ))}
          </Carousel>
        </MainContainer>

      ) : (
        <MainContainer id={id}>
          <Carousel
            plugins={[
              'infinite',
              'arrows',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1
                }
              },
            ]}
          >
            {ImagensTreinos.map(treino => (
              <div class="portfolioimg" id={treino.id}>
                <img src={treino.img} alt={treino.alt} />
              </div>
            ))}
          </Carousel>
        </MainContainer>

      )}
    </div>
  );
}
