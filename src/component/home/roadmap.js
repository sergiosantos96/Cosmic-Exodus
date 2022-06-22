import React, { useRef } from "react";
import { roadmap } from "../utils/roadmap_list";
import "./styles/roadmap.css";
import icon from "../../assets/Right_arrow.svg";

function Roadmap() {
  /* CAROUSEL */
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  /* ARRAY LIST */
  const list = [];

  const getListFromTitle = (title) => {
    roadmap.forEach((info) => {
      if (info.title === title) {
        list.push(info.list);
      }
    });
  };
  getListFromTitle();

  const today = new Date();

  const month = today.getMonth();
  const year = today.getFullYear();

  return (
    <>
      <h2 className="roadmap__title">Roadmap</h2>
      <div className="roadmap">
        <div className="roadmap__buttons">
          <button onClick={handleLeftClick} className="roadmap__arrow">
            <img src={icon} alt="arrow" className="roadmap__image" />
          </button>
        </div>
        <div className="roadmap__grid" ref={carousel}>
          {roadmap.map((info, index) => {
            return (
              <div
                key={info.id}
                className={
                  year === info.year &&
                  month >= info.month &&
                  month < info.month + 3
                    ? "roadmap__card-active"
                    : "roadmap__card"
                }
              >
                <h3 className="roadmap__subtitle">{info.title}</h3>
                <ul className="roadmap__list">
                  {roadmap[index]?.list.map((item) => {
                    return (
                      <li className="roadmap__item" key={item.item}>
                        {item.item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="roadmap__buttons">
          <button onClick={handleRightClick} className="roadmap__arrow">
            <img src={icon} alt="arrow" className="roadmap__image-rigth" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
