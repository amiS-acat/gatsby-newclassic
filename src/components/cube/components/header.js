import React, { useState } from "react";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";

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
            <a onClick={() => scrollTo("")}>蛾</a>
          </li>
          <li>
            <a onClick={() => scrollTo("")}>悲しげな鳥たち</a>
          </li>
          <li>
            <a onClick={() => scrollTo("")}>海原の小舟</a>
          </li>
          <li>
            <a onClick={() => scrollTo("")}>道化師の朝の歌</a>
          </li>
          <li>
            <a onClick={() => scrollTo("")}>鐘の谷</a>
          </li>
        </ul>
      </header>
      <div className="top__text">
        Ravel Maurice
        <br className="pc-display-none" />　『 Miroirs 』
        <div className="text-small">モーリス ラヴェル　組曲『鏡』</div>
      </div>
      <nav
        className={mobileClick ? "mobile-menu-open" : "mobile-menu"}
        onClick={() => setMobileClick((prevState) => !prevState)}
      >
        <ul>
          <li>
            <Link to="/">1</Link>
          </li>
          <li>
            <Link to="/page2">2</Link>
          </li>
          <li>
            <Link to="/page3">3</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
