import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/name.png" }) {
        childImageSharp {
          fixed(width: 175) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link to={`/`} className="icon">
          <Img fixed={data.file.childImageSharp.fixed} />
        </Link>
        <ul>
          <li className="map-btn">
            <a href="mailto:newclassNameic.ja&#64;gmail.com">contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
