import React from "react";
import "./routemap.css";

function Routemap({ routes }) {
  const routeLength = Object.keys(routes).length;
  return (
    <div className="routemap">
      {routes.map((info, index) => {
        return (
          <a className="routemap__text" href={info.href} key={index}>
            <p className="routemap__link">
              {info.name}
              {routeLength === index + 1 ? null : <span>&nbsp;&gt;&nbsp;</span>}
            </p>
          </a>
        );
      })}
    </div>
  );
}

export default Routemap;
