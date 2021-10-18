import Wrapper from "HOC/Wrapper/Wrapper";
import React from "react";
import "./CookingProcess.css";
import { ReactComponent as ArrowRight } from "assets/images/arrow-right.svg";
import CookingProcessCard from "components/CookingProcessCard/CookingProcessCard";

function CookingProcess() {
  return (
    <Wrapper bodyStyles={{ padding: "2vw 2vw" }}>
      <p className="light-black fs-35px weight-7 ">Cooking Process</p>
      <br />

      <div className="cooking-process-wrapper">
        <div className="cooking-process-header">
          <p className="fs-25px weight-5 light-black">Marinate</p>

          <div className="cooking-process-btn">
            <div>1/3</div>
            Next Step
            <ArrowRight />
          </div>
        </div>

        <div className="cooking-process-body">
          {new Array(3).fill("").map((cardData, index) => (
            <CookingProcessCard key={index} order={index} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default CookingProcess;
