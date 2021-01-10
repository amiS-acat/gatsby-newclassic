import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import InnreLink from "../innerLink";

const Header = () => {
  const [mobileClick, setMobileClick] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/logo/name.png" }) {
        childImageSharp {
          fixed(width: 175) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <header className={mobileClick ? "header-open" : "header"}>
        <div className="header__inner">
          {mobileClick ? (
            <div className="icon">
              <Img fixed={data.file.childImageSharp.fixed} alt="" />
            </div>
          ) : (
            <Link to="/" className="icon">
              <Img fixed={data.file.childImageSharp.fixed} alt="" />
            </Link>
          )}
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
      <div className="header__under"></div>
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

export default Header;
