import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Section = () => {
  const data = useStaticQuery(graphql`
    {
      A: file(relativePath: { eq: "images/icon/name_A.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      m: file(relativePath: { eq: "images/icon/name_m.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      i: file(relativePath: { eq: "images/icon/name_i.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <div className="FV">
      <div className="FV_inner">
        <Img className="name name_A" fixed={data.A.childImageSharp.fixed} />
        <Img className="name name_m" fixed={data.m.childImageSharp.fixed} />
        <Img className="name" fixed={data.i.childImageSharp.fixed} />
      </div>
    </div>
  );
};
export default Section;
