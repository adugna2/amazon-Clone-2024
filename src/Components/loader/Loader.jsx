import React from 'react';
import { FadeLoader } from 'react-spinners';
import classes from './loader.module.css'; // Create and import CSS module for custom styles

const Loader = ({ loading }) => {
  return (
    <div className={classes.loaderContainer}>
      <FadeLoader color={"#123abc"} loading={loading} />
    </div>
  );
};

export default Loader;