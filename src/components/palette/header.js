import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Section = () => {
  const data = useStaticQuery(graphql`
    {
      palette: file(relativePath: { eq: "images/picture/palette.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <header className="content-width">
      <div className="top-text">Roman Sketches</div>
      <Img
        className="img--palette"
        fluid={data.palette.childImageSharp.fluid}
      />
    </header>
  );
};

export default Section;
