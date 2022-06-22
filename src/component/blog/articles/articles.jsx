import React, { useState } from "react";
import { PostType } from "../../utils/blogIcons";
import { Article } from "../../utils/BlogArticle";
import { Link } from "react-router-dom";
import "./articles.css";

function Articles() {
  const [currentPosition, setCurrentPosition] = useState("announcements");
  const [filteredType, setFilteredType] = useState(PostType);

  const filterType = (label) => {
    setCurrentPosition(label);
    const newType = PostType.filter((PostType) => PostType.label === label);
    setFilteredType(newType);
  };

  return (
    <>
      <div className="buttons__container container">
        {PostType.map((item) => {
          const { id, type, label } = item;
          return (
            <button
              key={id}
              className={`hiring-btn ${
                currentPosition === label
                  ? "article__type--active"
                  : "article__type"
              }`}
              onClick={() => {
                if (label === "announcements") {
                  setCurrentPosition(label);
                  setFilteredType(label);
                } else {
                  filteredType(label);
                }
              }}
            >
              {type}
            </button>
          );
        })}
      </div>

      {/* Dropdown for responsive */}
      <div className="select">
        <select>
          {PostType.map((item) => {
            const { id, type } = item;
            return (
              <option key={id} className="articledrop__option">
                {type}
              </option>
            );
          })}
        </select>
        <div className="select__arrow"></div>
      </div>

      {/* Mapping for Articles */}
      <div className="article">
        {Article.map((info) => {
          const { id, img, type, date, title, text1, text2, style } = info;
          return (
            <Link key={id} to="/blog/single" className="article__link">
              <div className="article__card">
                <img className="article__image" src={img} alt={title} />
                <ul className="article__list">
                  <li className="article__item">
                    {" "}
                    <p className="article__date">{date}</p>
                  </li>
                  <li className="article__item">
                    <p className={style}>{type}</p>
                  </li>
                </ul>

                <h3 className="article__title">{title}</h3>
                <p className="article__info">{text1}</p>
                <p className="article__detail">{text2}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="pagination">
        <button className="pagination__button">Prev</button>
        <button className="pagination__button">Next</button>
      </div>
    </>
  );
}

export default Articles;
