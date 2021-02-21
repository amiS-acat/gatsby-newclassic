import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/logo/Ami-acat.png" }) {
        childImageSharp {
          fixed(width: 400, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <footer className="footer">
      <Img fixed={data.file.childImageSharp.fixed}/>
    </footer>
  );
};
export default Footer;
