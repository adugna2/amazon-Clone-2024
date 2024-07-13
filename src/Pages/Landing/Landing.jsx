
import CarouselEffect from '../../Components/Carousel/CarouselEffect';
 import Category from '../../Components/Category/Category';
 import Layout from '../../Components/layout/Layout';
 import Product from '../../Components/Product/Product';
// import ProductDetail from '../ProductDetail/ProductDetail';
function Landing() {
  return (
    <Layout>  
      <CarouselEffect />
      <Category /> 
      <Product/>
      </Layout>
  )
}

export default Landing