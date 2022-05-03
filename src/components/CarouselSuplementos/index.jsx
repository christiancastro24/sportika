// Componente de imagens de suplementos
import { ImagensSuplementos } from "../../components/Imagens"

//FUNCTIONAL
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useState, useEffect } from 'react'

//STYLE
import { MainContainer } from './styles'


export const CarouselSuplementos = ({ id }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

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
            {ImagensSuplementos.map(treino => (
              <div class="portfolioimg" id={treino.id}>
                <img src={treino.img} alt={treino.alt} />
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
            {ImagensSuplementos.map(treino => (
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
