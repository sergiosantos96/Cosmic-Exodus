import React from "react";
import "./accordion.css";

function Accordionitem({ title, description, active, setActive }) {
  const openAccordion = () => {
    setActive(title);
  };

  const closeAccordion = () => {
    setActive(!title);
  };

  return (
    <div className="accordion__container">
      <div className="accordion">
        <hr className="accordion__line" />
        <header
          onClick={active === title ? closeAccordion : openAccordion}
          className="accordion__header"
        >
          <p className="accordion__title">{title}</p>
          <span className="accordion__icon">
            {active === title ? "-" : "+"}
          </span>
        </header>

        <div
          className={(active === title ? "show" : "") + " accordion__content"}
        >
            <p className="accordion__text" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
}

export default Accordionitem;
