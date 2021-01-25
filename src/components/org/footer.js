import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Footer = () => {
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
    <footer className="footer">
      <div className="footer__inner">
        <Link to="/" className="icon" aria-label="go home">
          <Img fixed={data.file.childImageSharp.fixed} />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
