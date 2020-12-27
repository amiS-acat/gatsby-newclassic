import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import InnerLink from "../../innerLink";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/logo/name.png" }) {
        childImageSharp {
          fixed(width: 175) {
            ...GatsbyImageSharpFixed_withWebp__tracedSVG
          }
        }
      }
    }
  `)

  return (
    <header className="header">
      <div className="header__inner">
        <div className="icon">
          <Link to="/">
            <Img fixed={data.file.childImageSharp.fixed} alt="" />
          </Link>
        </div>
        <InnerLink />
      </div>
    </header>
  );
};

export default Header;
