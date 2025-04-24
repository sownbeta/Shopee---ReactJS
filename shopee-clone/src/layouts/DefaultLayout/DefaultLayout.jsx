import React from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';


const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <Header />
      <Slider />
      {/* <main>{children}</main> */}
      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayout;
