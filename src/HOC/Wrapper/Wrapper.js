import BgGrayComponent from "components/BgGrayComponent/BgGrayComponent";
import Navbar from "layouts/Navbar/Navbar";
import Sidebar from "layouts/Sidebar/Sidebar";
import React from "react";

function Wrapper(props) {
  return (
    <>
      <Navbar />
      <div className="page-body row">
        <Sidebar />
        <BgGrayComponent styles={props.bodyStyles}>
          {props.children}
        </BgGrayComponent>
      </div>
    </>
  );
}

export default Wrapper;
