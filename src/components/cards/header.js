import React, { useState } from "react";

import InnreLink from "../innerLink"

const Hedaer = () => {
  const [mobileClick, setMobileClick] = useState(false);

  return (
    <>
      <header className={mobileClick ? "header-open" : "header"}>
        <div className="header__inner">
          <div>
            Ravel Maurice　『 Miroirs 』
            <div className="mirror-text">
              Ravel Maurice　『 Miroirs 』
            </div>
          </div>
          <button
            onClick={() => setMobileClick((prevState) => !prevState)}
            onKeyDown={() => setMobileClick((prevState) => !prevState)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <nav
        className={mobileClick ? "mobile-menu-open" : "mobile-menu"}
        onClick={() => setMobileClick((prevState) => !prevState)}
        onKeyDown={() => setMobileClick((prevState) => !prevState)}
      >
        <InnreLink />
      </nav>
    </>
  );
};

export default Hedaer;
