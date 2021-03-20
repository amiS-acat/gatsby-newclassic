import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

const Menu = () => {
  return (
    <div className="menu sp-display-none">
      <ul>
        <li>
          <a onClick={() => scrollTo("#t1")}>
            <span className="menu_no">1</span>AmiSawai
          </a>
        </li>
        <li>
          <a onClick={() => scrollTo("#t2")}>
            <span className="menu_no">2</span>Profiel
          </a>
        </li>
        <li>
          <a onClick={() => scrollTo("#t3")}>
            <span className="menu_no">3</span>My Favorite
          </a>
        </li>
        <li>
          <a onClick={() => scrollTo("#t4")}>
            <span className="menu_no">4</span>Debussy
          </a>
        </li>
        <li>
          <a onClick={() => scrollTo("#t5")}>
            <span className="menu_no">5</span>Griffes
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
