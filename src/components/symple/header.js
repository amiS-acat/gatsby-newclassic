import React from "react";
import { Link } from "gatsby";

import gif from "../../../frontmatter/gif/name.gif";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="icon">
          <Link to="/" aria-label="go home">
            <img src={gif} style={{ width: "150px" }} alt="namegif" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
