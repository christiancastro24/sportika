import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "./styles";

import banner1 from "../../assets/images/banner1.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import { Link } from "react-router-dom";

export const CarouselBanner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 450 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 0,
      slidesToSlide: 0,
    },
  };

  return (
    <>
      <Carousel
        renderArrowsWhenDisabled={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        arrows={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3100}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={2200}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        focusOnSelect={true}
      >
        <Container>
          <Link to="/">
            <img src={banner3} alt="banner1" />
          </Link>
        </Container>
        <Container>
          <Link to="/">
            <img src={banner1} alt="banner2" />
          </Link>
        </Container>
        <Container>
          <Link to="/">
            <img src={banner4} alt="banner3" />
          </Link>
        </Container>
      </Carousel>
    </>
  );
};