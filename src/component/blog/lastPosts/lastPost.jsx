import React from "react";
import { Link } from "react-router-dom";
import { lastArticle } from "../../utils/BlogArticle";
import "./lastPosts.css";

function LastPost() {
  return (
    <div className="lastarticle">
      {lastArticle.map((info) => {
        const { id, img, type, date, style, title1, text1, text2 } = info;
        return (
          <Link key={id} to="/blog/single" className="lastarticle__link">
            <div className="lastarticle__card">
              <img className="lastarticle__image" src={img} alt={title1} />
              <ul className="lastarticle__list">
                <li className="lastarticle__item">
                  {" "}
                  <p className="lastarticle__date">{date}</p>
                </li>
                <li className="lastarticle__item">
                  <p className={style}>{type}</p>
                </li>
              </ul>
              <h3 className="lastarticle__title">{title1}</h3>
              <p className="lastarticle__info">{text1}</p>
              <p className="lastarticle__detail">{text2}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default LastPost;
