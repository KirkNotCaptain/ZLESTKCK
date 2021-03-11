import React, { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";

// import 'swiper/swiper-bundle.css';

import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation, Pagination, Thumbs]);

let DisplayProductPreview = ({ styles, changeView, currentProduct }) => {
  // console.log(styles)

  if (styles.length === undefined || styles.length === 0) {
    return <div> place holder for when products api called </div>;
  }

  let { thumbnail_url } = currentProduct.photos[0];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentStyle, setCurrentStyle] = useState({});

  let slides = [];
  let thumbs = [];

  styles.map((product, index) => {
    // note - this can be transformed into a helper func its repetitive
    const { photos } = product;

    const { thumbnail_url } = photos[0];

    slides.push(
      <SwiperSlide>
        <img
          key={index}
          className="MainSliderImg"
          src={thumbnail_url}
          onClick={(e) => {
            changeView(e, product);
          }}
        ></img>
      </SwiperSlide>
    );
  });

  styles.map((product, index) => {
    const { photos } = product;

    const { thumbnail_url } = photos[0];

    thumbs.push(
      <SwiperSlide>
        <img
          key={index}
          // style={{ height: "150px", width: "150px" }}
          className="thumbsImg StyleSelected"
          src={thumbnail_url}
          onClick={(e) => {
            changeView(e, product);
          }}
        ></img>
      </SwiperSlide>
    );
  });

  return (
    <>
      <div className="PhotoGalleryContainer">
        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={0}
          onSlideChange={() => {}}
          slidesPerView={1}
          // Pagination
          // Navigation
        >
          {slides}
          {/* <div className="prev">arrow right </div>
          <div className="next"> arrow left </div> */}
        </Swiper>
      </div>

      <div className="StylesContainer">
        <Swiper
          id="thumbs"
          className="StylesContainer"
          onSlideChange={(e) => {}}
          onSwiper={setThumbsSwiper}
          spaceBetween={5}
          slidesPerView={4}
        >
          {thumbs}
        </Swiper>
      </div>
    </>
  );
};

export default DisplayProductPreview;
