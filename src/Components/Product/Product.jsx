import { useEffect, useState } from "react";
import axios from 'axios';
 import ProductCard from './ProductCard'
import classes from './css/Product.module.css'
// import { Loader } from "../loader/Loader";
function Product() {
    const [Products, setProduct] = useState();
    //  const [isLoading, setIsLoading] =useState(false)
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
console.log(res)
                setProduct(res.data)
                // isLoading(false)
            }) 
    .catch((err) => {
                console.log(err);
                // isLoading(false)
            })
    }, [])

    return (<>
    
    {/* isLoading?(<Loader/>):
    ( */}
    <section className={classes.products_container}>  
        
        {
                Products?.map((singleProduct) => {
                    return <ProductCard Product={singleProduct} key={singleProduct.id} />
})
            } 
        </section>) 
        
    </>
    )} 


export default Product;