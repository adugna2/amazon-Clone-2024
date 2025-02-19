/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import LayOut from "../../Components/LayOut/LayOut";
import { useEffect,useState} from'react'
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/product/ProductCard";
import Loader from "../../Components/Loader/Loader";

// import classes from './ProductDetail.module.css'
function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  // console.log(productId);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard product={product} renderAdd={true} flex={true} />
      )}
    </LayOut>
  );
}

export default ProductDetail;
