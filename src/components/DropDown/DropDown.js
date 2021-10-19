import React from "react";
import "./DropDown.css";
import downArrowIcon from "assets/images/down-arrow.png";
import searchIcon from "assets/images/search-2.png";
import DropdownItem from "components/DropdownItem/DropdownItem";

function DropDown(props) {
  let { btnTitle, position = "left" } = props;
  //
  const [show, setShow] = React.useState(false);
  const menuRef = React.useRef();

  React.useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={menuRef} className="dropdown">
      <div className="dropdown-btn" onClick={() => setShow(!show)}>
        {btnTitle} <img src={downArrowIcon} alt="" />
      </div>
      <div className={`dropdown-menu ${position} ${show ? "show" : ""} `}>
        <div className="dropdown-menu-body">
          <div className="dropdown-input">
            <img src={searchIcon} alt="" />
            <input type="text" placeholder="Search for Ingredients" />
          </div>

          <div className="dropdown-items">
            <DropdownItem />
            <DropdownItem />
            <DropdownItem />
            <DropdownItem />
            <DropdownItem />
          </div>
        </div>
        <div className="dropdown-footer">
          <button>Clear</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
