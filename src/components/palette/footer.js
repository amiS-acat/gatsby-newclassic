import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

import InnerLink from "../innerLink";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "images/logo/icon.png" }) {
        childImageSharp {
          fixed(width: 32) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      name: file(relativePath: { eq: "images/logo/name.png" }) {
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
      <footer className="footer">
        <div className="footer__inner display-flex">
          <Link to="/" className="icon" aria-label="go home">
            <Img fixed={data.logo.childImageSharp.fixed} />
            <Img
              fixed={data.name.childImageSharp.fixed}
              style={{ marginLeft: "10px" }}
            />
          </Link>
          <ul>
            List
            <InnerLink />
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
