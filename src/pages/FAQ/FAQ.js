import Accordion from "components/Accordion/Accordion";
import Wrapper from "HOC/Wrapper/Wrapper";
import React from "react";
import "./FAQ.css";

function FAQ() {
  return (
    <Wrapper bodyStyles={{ padding: "1.5vw 4vw" }}>
      <p className="black fs-35px weight-7 mb-15">FAQ</p>

      <div className="faq-accordions">
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    </Wrapper>
  );
}

export default FAQ;
