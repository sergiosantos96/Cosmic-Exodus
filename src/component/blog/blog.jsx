import React from "react";
import blogIcons from "../utils/blogIcons";
import "./blog.css";

function Blog() {
  return (
    <>
      <div className="blog">
        <div className="blog__container container">
          <h2 className="blog__titlte">Cosmic Blog</h2>
          <h3 className="blog__subtitle">
            Find news, articles and the latest memes!
          </h3>
          <div className="blog__line"></div>
          <ul className="blog__list">
            {blogIcons.map((icons) => {
              const { id, img, link, name } = icons;
              return (
                <li className="blog__item" key={id}>
                  <a href={link}>
                    <img src={img} alt={name} className="blog__icon" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <div className="article__line"></div> */}
    </>
  );
}

export default Blog;
