import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Section = () => {
  const data = useStaticQuery(graphql`
    {
      picture1: file(relativePath: { eq: "images/picture/picture1.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      picture2: file(relativePath: { eq: "images/picture/picture2.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <div className="top-pictures">
      <Img fluid={data.picture1.childImageSharp.fluid} />
      <Img fluid={data.picture2.childImageSharp.fluid} />
    </div>
  );
};
export default Section;
