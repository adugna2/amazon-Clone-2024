/* eslint-disable react/prop-types */

import Header from "../Header/Header";
import LowerHeader from "../Header/LowerHeader";

function LayOut({ children }) {
  return (
    <>
      <Header />
      <LowerHeader />
      {children}
    </>
  );
}

export default LayOut;
