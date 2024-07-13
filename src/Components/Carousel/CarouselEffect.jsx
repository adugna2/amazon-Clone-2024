
import { Carousel } from 'react-responsive-carousel';
import img from '../../image/img'; // Corrected import statement
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classes from './Carousel.module.css';
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {
          img.map((imageItemLink, index) => ( // Added key prop to images
            <div key={index}>
              <img src={imageItemLink} alt={`Slide ${index + 1}`} />
            </div>
          ))
        }
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  );
}

export default CarouselEffect;















// import { Carousel } from 'react-responsive-carousel';
// import { img } from './image/img';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// function CarouselEffect() {
//   return (
//     <div>
//       <Carousel
//         autoPlay={true}
//         infiniteLoop={true}
//         showIndicators={true}
//         showThumbs={true} // Corrected the typo here
//       >
//         {
//           img.map((imageItemLink) => {
//             return <img src={imageItemLink}/>;
//           })
//         }
//       </Carousel>
//       <div className="hero__img"></div>
//     </div>
//   );
// }

// export default CarouselEffect;