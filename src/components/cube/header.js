import React, { useState } from "react";

import InnerLink from "../innerLink";

const Header = () => {
  const [mobileClick, setMobileClick] = useState(false);

  return (
    <>
      <header className="header">
        <button
          onClick={() => setMobileClick((prevState) => !prevState)}
          onKeyDown={() => setMobileClick((prevState) => !prevState)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="padding"></div>
        <div className="top__text">
          Ravel Maurice
          <br className="pc-display-none" />　『 Miroirs 』
          <div className="text-small">
            モーリス ラヴェル　組曲『鏡』
            <br />
          </div>
        </div>
        <div className="bar--black"></div>
        <div className="top__text text-small">
          Press <span className="small-box"></span> to play
        </div>
        <div className="top__text mirror-text">
          <div className="text-small" style={{ marginBottom: "-13px" }}>
            モーリス ラヴェル　組曲『鏡』
            <br />
          </div>
          Ravel Maurice
          <br className="pc-display-none" />　『 Miroirs 』
        </div>
      </header>
      <nav
        className={mobileClick ? "mobile-menu-open" : "mobile-menu"}
        onClick={() => setMobileClick((prevState) => !prevState)}
        onKeyDown={() => setMobileClick((prevState) => !prevState)}
      >
        <InnerLink />
      </nav>
    </>
  );
};

export default Header;
