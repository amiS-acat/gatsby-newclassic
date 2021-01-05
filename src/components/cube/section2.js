import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const Section = () => {

  const data = useStaticQuery(graphql`
    {
      ravel: file(relativePath: { eq: "images/photo/ravel.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="border--gray"></div>
      <section className="composer display-flex-block">
        <Img
          className="border-radius"
          fixed={data.ravel.childImageSharp.fixed}
        />
        <div className="composer-text">
          モーリス ラヴェル
          <br />
          フランス
          <br />
          1875-1937
        </div>
      </section>
    </>
  );
};

export default Section;
