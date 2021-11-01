import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../images/banner/img (1).jpg";
import img2 from "../../../images/banner/img (2).jpg";
import img3 from "../../../images/banner/img (3).jpg";
import img4 from "../../../images/banner/img (4).jpg";
import "./banner.css";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        className="banner"
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
      >
        <div>
          <img src={img1} alt="banner" />
        </div>
        <div>
          <img src={img2} alt="banner" />
        </div>
        <div>
          <img src={img3} alt="banner" />
        </div>
        <div>
          <img src={img4} alt="banner" />
        </div>
      </Carousel>
      <div className="banner-abs flex justify-center items-center">
        <div className="space-y-2 md:space-y-4 text-center">
          <h2 className="text-2xl md:text-7xl font-semibold uppercase text-btnTwo">
            Welcome to <span className="font-bold text-btn">TOURBD</span>
          </h2>
          <h2 className="text-md md:text-2xl font-semibold text-btnTwo ">
            Where u can book amazing tour from here
          </h2>
          <div>
            <a
              href="#contactUs"
              className="bg-btn inline-block text-secondary font-medium rounded hover:bg-primary hover:text-btnTwo transition-all p-1 md:px-5 md:py-3"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
