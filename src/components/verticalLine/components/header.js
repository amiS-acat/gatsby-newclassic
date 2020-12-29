import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";

import InnerLink from "../../innerLink";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/icon/icon.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
      <header className="header">
        <Link to="/">
          <Img className="icon" fixed={data.file.childImageSharp.fixed} />
        </Link>
        <InnerLink />
      </header>
  );
};

export default Header;
