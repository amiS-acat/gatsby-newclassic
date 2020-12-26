import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      ravel: file(relativePath: { eq: "images/photo/ravel.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="border--black"></div>
      <section className="composer display-flex-block">
        <Img
          className="composer-img"
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

export default Index;
