import React from "react";
import "./Accordion.css";
import arrow from "assets/images/arrow.png";

function Accordion() {
  let [active, setActive] = React.useState(false);
  let accordionBodyRef = React.useRef("");

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div className="accordion">
      <div onClick={toggleAccordion} className="accordion-header">
        <p className="fs-20px weight-7 light-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore?{" "}
        </p>
        <img
          src={arrow}
          alt=""
          className={active ? `accordion-btn active` : "accordion-btn"}
        />
      </div>
      <div
        className="accordion-body"
        ref={accordionBodyRef}
        style={{
          height: active ? accordionBodyRef.current.scrollHeight + "px" : "0",
        }}
      >
        <div className="accordion-body-wrapper">
          <p className="fs-18px lightest-gray">
            In arcu cursus euismod quis viverra nibh. Sed blandit libero
            volutpat sed. Elit eget gravida cum sociis natoque penatibus et
            magnis. Nunc scelerisque viverra mauris in aliquam sem fringilla.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
