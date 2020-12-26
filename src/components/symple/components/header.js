import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/logo/name.png" }) {
        childImageSharp {
          fixed(width: 175) {
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
    }
  `);

  return (
    <header className="header">
      <div className="header__inner">
        <div className="icon">
          <Link to="/">
            <Img fixed={data.file.childImageSharp.fixed} alt="" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/page1">1</Link>
          </li>
          <li>
            <Link to="/page2">2</Link>
          </li>
          <li>
            <Link to="/page3">3</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
