import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Section = () => {
  const data = useStaticQuery(graphql`
    {
      picture3: file(relativePath: { eq: "images/picture/picture3.png" }) {
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
      <Img fluid={data.picture3.childImageSharp.fluid} />
    </div>
  );
};
export default Section;
