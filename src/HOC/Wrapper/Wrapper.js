import BgGrayComponent from "components/BgGrayComponent/BgGrayComponent";
import Navbar from "layouts/Navbar/Navbar";
import Sidebar from "layouts/Sidebar/Sidebar";
import React from "react";

function Wrapper(props) {
  let { showSidebar = true, focus } = props;
  return (
    <>
      <Navbar focus={focus} />
      <div className="page-body">
        {showSidebar ? <Sidebar /> : ""}
        <BgGrayComponent styles={props.bodyStyles}>
          {props.children}
        </BgGrayComponent>
      </div>
    </>
  );
}

export default Wrapper;
