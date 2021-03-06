import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Header from "../components/header";

import SEO from "../components/seo";
import "../styles/_destyle.css"
import "../styles/style.scss"

const notFound = ({ data }) => {
  return (
    <>
      <Header />
      <SEO />
      <p
        style={{
          padding: "33vh 0 0 0",
          textAlign: "center",
          fontSize: "17px",
        }}
      >
        That page couldn't be found
      </p>
      <Img
        fixed={data.file.childImageSharp.fixed}
        style={{
          margin: "34px auto 18vh",
          display: "block",
        }}
      />
    </>
  );
};

export const query = graphql`
  {
    file(relativePath: { eq: "images/icon/cup.png" }) {
      childImageSharp {
        fixed(width: 70) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`;

export default notFound;
