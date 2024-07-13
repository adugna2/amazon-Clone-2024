

import { CategoryInfos } from './catagoryFullnfos';
import CategoryCard from './CategoryCard';
import classes from './css/catagory.module.css';

function Category() {
  return (
    <section className={classes.Category__container}>
      {CategoryInfos.map((infos) => (
        <CategoryCard key={infos.name} data={infos} /> // Added key prop
      ))}
    </section>
  );
}

export default Category;