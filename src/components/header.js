import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import InnreLink from "./innerLink";

const Header = () => {
  const [mobileClick, setMobileClick] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/logo/icon1.png" }) {
        childImageSharp {
          fixed(width: 50, quality: 100) {
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
          <Link
            to="/"
            aria-label="go home"
            className="icon"
            style={{ zIndex: mobileClick ? "-1" : "1" }}
          >
            <Img fixed={data.file.childImageSharp.fixed} alt="" />
          </Link>
          <button
            onClick={() => setMobileClick((prevState) => !prevState)}
            onKeyDown={() => setMobileClick((prevState) => !prevState)}
            aria-label="mobile"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div className="header__under"></div>
      <button
        className={mobileClick ? "mobile-menu-open" : "mobile-menu"}
        onClick={() => setMobileClick((prevState) => !prevState)}
        onKeyDown={() => setMobileClick((prevState) => !prevState)}
      >
        <ul>
          <li><Link to="/">Home</Link></li>
          <InnreLink />
        </ul>
      </button>
    </>
  );
};

export default Header;
