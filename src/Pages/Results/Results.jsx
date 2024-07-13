
import { useEffect, useState } from 'react';
import classes from './Result.module.css';
import Layout from '../../Components/layout/Layout';
import { useParams } from 'react-router-dom';
import axios from '../../Pages/Results/axios'; // Ensure the correct path to your custom axios instance
import ProductCard from '../../Components/Product/ProductCard';

function Results() {
  const [Results, SetResults] = useState([]);
  const [error, setError] = useState(null);
  const { categoryName } = useParams();

  useEffect(() => {
    // URL-encode the category name
    const encodedCategoryName = encodeURIComponent(categoryName);
    const url = `/products/category/${encodedCategoryName}`;
    console.log('Fetching products from:', url);

    axios.get(url)
      .then((res) => {
        SetResults(res.data);
      })
      .catch((err) => {
        setError(err.message);
        console.log('Error fetching data:', err);
      });
  }, [categoryName]);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: '30px' }}>Results</h1>
        <p style={{ padding: '30px' }}>Category/{categoryName}</p>
        <hr />
        {error && <p style={{ color: 'red', padding: '30px' }}>Error: {error}</p>}
        <div className={classes.Products__container}>
          {Results?.map((Product) => (
            <ProductCard
              key={Product.id}
              Product={Product}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Results;











// import classes from './Result.module.css'
// import Layout from '../../Components/layout/Layout'
// import { useParams } from 'react-router-dom'
// import axios from '../../Pages/Results/axios';
// import { ProductUrl} from '../../APi/endPonint'
// import { useEffect, useState } from 'react'
// import ProductCard from '../../Components/Product/ProductCard'

// function Results() {
//   const [Results, SetResults] = useState([]);
//   const { categoryName } = useParams();

//   useEffect(() => {
//     axios.get(`${ProductUrl}/Product/Category/${categoryName}`)

//       .then((res) => {
//         SetResults(res.data);
//       }).catch((err) => {
//         console.log(err);
//       });
//   }, [categoryName]);

//   return (
//     <Layout>
//       <section>
//     <h1 style={{ padding: '30px' }}>Results</h1>
//       <p style={{ padding: '30px' }}>Category/{categoryName}</p>
//       <hr />       <div className={classes.Products__container}>
//         {Results?.map((Product) => (
//           <ProductCard
//               key={Product.id} 
//         Product={Product}
//        /> 
//         ))}
//       </div> 
//      </section> 
// </Layout>
// );
// }

// export default Results;