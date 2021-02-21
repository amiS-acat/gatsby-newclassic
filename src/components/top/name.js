import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Section = () => {
  const data = useStaticQuery(graphql`
    {
      A: file(relativePath: { eq: "images/logo/name_a.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      m: file(relativePath: { eq: "images/logo/name_m.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      i: file(relativePath: { eq: "images/logo/name_i.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <div className="FV">
      <div className="FV_inner">
        <Img className="name name_A" fluid={data.A.childImageSharp.fluid} />
        <Img className="name name_m" fluid={data.m.childImageSharp.fluid} />
        <Img className="name" fluid={data.i.childImageSharp.fluid} />
      </div>
    </div>
  );
};
export default Section;
