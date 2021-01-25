import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import scrollTo from "gatsby-plugin-smoothscroll";

import InnreLink from "../innerLink";

const Header = () => {
  const [mobileClick, setMobileClick] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/logo/icon1.png" }) {
        childImageSharp {
          fixed(width: 50) {
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
          <div className="headerNavi-btn">
            <a
              className="font-bold"
              onClick={() => scrollTo("#a01")}
              onKeyDown={() => scrollTo("#a01")}
              style={{ marginRight: "20px" }}
            >
              profile
            </a>
            <a
              className="font-bold"
              onClick={() => scrollTo("#a02")}
              onKeyDown={() => scrollTo("#a02")}
            >
              wep
            </a>
          </div>
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
