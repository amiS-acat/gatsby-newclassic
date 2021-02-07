import React from "react";
import { Link } from "gatsby";

import movie from "../../../frontmatter/movie/name.mp4";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="icon">
          <Link to="/" aria-label="go home">
            <video className="name-icon--video" muted src={movie} autoPlay playsInline></video>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
