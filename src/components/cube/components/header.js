import React, { useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import InnerLink from "../../innerLink"

const Header = () => {
  const [mobileClick, setMobileClick] = useState(false);

  return (
    <>
      <header>
        <button onClick={() => setMobileClick((prevState) => !prevState)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="top-img"></div>
        <div className="list-top">鏡</div>
        <ul className="lists sp-display-none">
          <li>
            <a onClick={() => scrollTo("#a01")}>蛾</a>
          </li>
          <li>
            <a onClick={() => scrollTo("#a02")}>悲しげな鳥たち</a>
          </li>
          <li>
            <a onClick={() => scrollTo("#a03")}>海原の小舟</a>
          </li>
          <li>
            <a onClick={() => scrollTo("#a04")}>道化師の朝の歌</a>
          </li>
          <li>
            <a onClick={() => scrollTo("#a05")}>鐘の谷</a>
          </li>
        </ul>
      </header>
      <div className="top__text">
        Ravel Maurice
        <br className="pc-display-none" />　『 Miroirs 』
        <div className="text-small">
          モーリス ラヴェル　組曲『鏡』
          <br />
        </div>
      </div>
      <div
        className="border--black"
        style={{ marginBottom: "0", width: "73%" }}
      ></div>
      <div className="top__text text-small">
        Press <span className="square"></span> to play
      </div>
      <nav
        className={mobileClick ? "mobile-menu-open" : "mobile-menu"}
        onClick={() => setMobileClick((prevState) => !prevState)}
      >
        <InnerLink />
      </nav>
    </>
  );
};

export default Header;
