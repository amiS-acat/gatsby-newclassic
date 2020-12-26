import React, { useState } from "react";
import { Link } from "gatsby";

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
        <div className="top-img">
          {/* <Img fluid={data.mirror.childImageSharp.fluid} /> */}
        </div>
        <ul className="lists">
          <div className="list-title">鏡</div>
          <li>
            <a>蛾</a>
          </li>
          <li>
            <a>悲しげな鳥たち</a>
          </li>
          <li>
            <a>海原の小舟</a>
          </li>
          <li>
            <a>道化師の朝の歌</a>
          </li>
          <li>
            <a>鐘の谷</a>
          </li>
        </ul>
      </header>
      <div className="content-width">
        <div className="top__text">
          Ravel Maurice<br className="pc-display-none"/>　『 Miroirs 』<div className="text-small">モーリスラヴェル　組曲『鏡』</div>
        </div>
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
