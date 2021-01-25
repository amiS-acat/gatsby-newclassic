import React from "react";
import { Link } from "gatsby";

import InnerLink from "../innerLink";

import gif from "../../../frontmatter/gif/name.gif";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner font-bold">
        <div className="icon">
          <Link to="/" aria-label="go home">
            <img src={gif} style={{ width: "150px" }} alt="namegif" />
          </Link>
        </div>
        <ul>
          list
          <InnerLink />
        </ul>
      </div>
    </header>
  );
};

export default Header;
