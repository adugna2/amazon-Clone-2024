import LayOut from "../../Components/LayOut/LayOut.jsx";
import CarouselEffect from "../../Components/carousel/Carousel";
import Catagory from "../../Components/catagory/Catagory";
import Product from "../../Components/product/Product";
function Landing() {
  return (
    <>
     <LayOut>
       <CarouselEffect />
      <Catagory />
      <Product />
   </LayOut> 
  </>
  );
}

export default Landing;
