import PropTypes from 'prop-types';
import classes from './css/catagory.module.css';
import { Link } from 'react-router-dom';

function CategoryCard({ data }) {
    console.log(data);

    return (
        <div className={classes.category}>
            <Link to={`/category/${data?.name}`}>
                <span>
                    <h2>{data?.title}</h2>
                </span>
                <img src={data?.imgLink} alt="" />
                <p>Shop now</p>
            </Link>
        </div>
    );
}

CategoryCard.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        imgLink: PropTypes.string,
    }).isRequired,
};

export default CategoryCard;










// import classes from './css/catagory.module.css';
// import { Link } from 'react-router-dom';

// function CategoryCard({ data }) {
//     console.log(data) ;

//     return (
//         <div className={classes.category}>
//             <Link to={`/category/${data.name}`}>
//                 <span>
//                     <h2>{data?.title}</h2>
//                 </span>
//                 <img src={data?.imgLink} alt="" />
//                 <p>Shop now</p>
//             </Link>
//         </div>
//     );
// }

// export default CategoryCard;