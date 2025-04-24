import React, { useState, useEffect } from "react"; // Import React và các hooks
import styles from "./Slider.module.scss";
import classNames from "classnames/bind";
import image1 from "../../assets/images/slider/img1.png";
import image2 from "../../assets/images/slider/img2.png";
import image3 from "../../assets/images/slider/img3.png";
import image4 from "../../assets/images/slider/img4.png";
import image5 from "../../assets/images/slider/img5.jpg";
import image6 from "../../assets/images/slider/img6.jpg";

const cx = classNames.bind(styles);

const Slider = () => {
  const images = [image1, image2, image3, image4];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className={cx("slider-container")}>
      <div className={cx("left-container")}>
        <img
          className={cx("img-slider")}
          src={images[currentImage]}
          alt="Slide"
        />
      </div>
      <div className={cx("right-container")}>
        <div className={cx("top-right-container")}>
          <img src={image5} alt="Slide" />
        </div>
        <div className={cx("bottom-right-container")}>
          <img src={image6} alt="Slide" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
