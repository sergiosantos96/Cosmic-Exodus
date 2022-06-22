import React, { useState } from "react";
import { contentData } from "../utils/carouselData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./content.css";

const responsive = {
  500: { items: 1, paddingLeft: 50 },
  770: { items: 2 },
  1300: { items: 3 },
  1700: { items: 4 },
};

const style = { width: 270, paddingLeft: 80 };

const items = contentData.map((el) => {
  const { id, image } = el;
  return (
    <>
      <img
        className="profile__image"
        key={id}
        style={style}
        src={image}
        alt="profile-logo"
      />
    </>
  );
});

function Content({ title }) {
  /* const carousel = useRef(null); */
  const [isActive, setIsActive] = useState(false);

  const onCardClick = () => {
    setIsActive(!isActive);
  };

  /*   const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }; */

  return (
    <div className="content">
      <hr className="graphics__line" />
      <h3 className="content__subtitle">{title}</h3>

      <div className="content__container">
        <div className="sliders">
          <AliceCarousel
            className="carousel"
            items={items}
            controlsStrategy="alternate"
            responsive={responsive}
            disableDotsControls={true}
            infinite={false}
            renderPrevButton={() => {
              return (
                <p className="right-btn">
                  <IoIosArrowBack className="left-arrow" />
                </p>
              );
            }}
            renderNextButton={() => {
              return (
                <p className="next-btn">
                  <IoIosArrowForward className="right-arrow" />
                </p>
              );
            }}
          />
        </div>
        <button className="content__btn">Download</button>
        {/*     {contentData.map((item) => {
            const { id, image } = item;
            return (
              <div className="slider-card" key={id} onClick={onCardClick}>
                <img
                  src={image}
                  alt="graphics__img"
                  className={isActive ? "active-card" : "graphics__image"}
                />
              </div>
            );
          })} */}
      </div>
    </div>
  );
}

export default Content;
