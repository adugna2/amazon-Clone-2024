import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./img/data.js";
import classes from "./Carousel.module.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        autoFocus={false}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        
      >
        {img?.map((imageItemLink) => {
          return <img key={imageItemLink} src={imageItemLink} />;
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  );
}

export default CarouselEffect;
