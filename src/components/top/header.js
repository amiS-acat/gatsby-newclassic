import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import scrollTo from "gatsby-plugin-smoothscroll";

const Header = () => {
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
      <header className="header">
        <div className="header__inner">
          <Link to="/" className="icon" aria-label="go home">
            <Img fixed={data.file.childImageSharp.fixed} alt="" />
          </Link>
          <div className="headerNavi-btn">
            <button
              onClick={() => scrollTo("#a01")}
              onKeyDown={() => scrollTo("#a01")}
              style={{ marginRight: "20px" }}
              aria-label="scroll"
            >
              Profile
            </button>
            <button
              onClick={() => scrollTo("#a02")}
              onKeyDown={() => scrollTo("#a02")}
              aria-label="scroll"
            >
              Portfolio
            </button>
          </div>
        </div>
      </header>
      <div className="header__under"></div>
    </>
  );
};

export default Header;
