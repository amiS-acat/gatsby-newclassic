import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Header from "../components/org/header";
import Footer from "../components/org/footer";

import SEO from "../components/seo";

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <div className="top-content">
      <SEO />
      <div className="FV">
        <div className="name">ami sawai</div>
      </div>
      {posts.map(({ node }) => (
        <>
          <div
            className="content-width text-align-center"
            style={{ paddingTop: "24px" }}
          >
            <Link to={node.frontmatter.slug} key={node.frontmatter.slug}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
          </div>
          <div style={{ marginLeft: "5px" }}>scroll !</div>
          <div
            className="scroll-container display-flex"
            style={{
              backgroundColor: node.frontmatter.base_color,
              color: node.frontmatter.font_color,
              border: "2px solid black",
            }}
          >
            <div className="scroll-container inner-content">
              <Img
                className="content-item"
                style={{ width: "400px", marginLeft: "-2px" }}
                fluid={node.frontmatter.image_pc.childImageSharp.fluid}
              />
            </div>
            <div
              className="middle-content"
            >
              ◀︎
              <br />P<br />C
              <div style={{ marginTop: "105px" }}>
                i<br />P<br />a<br />d<br />
                ▶︎
              </div>
            </div>
            <div className="scroll-container inner-content">
              <Img
                className="content-item"
                style={{ width: "200px" }}
                fluid={node.frontmatter.image_ipad.childImageSharp.fluid}
              />
            </div>
            <div className="middle-content">
              ◀︎
              <br />i<br />P<br />a<br />d
              <div style={{ marginTop: "33px" }}>
                i<br />P<br />h<br />o<br />n<br />e<br />
                ▶︎
              </div>
            </div>
            <div className="scroll-container inner-content">
              <Img
                className="content-item"
                style={{ width: "150px" }}
                fluid={node.frontmatter.image_sp.childImageSharp.fluid}
              />
            </div>
          </div>
        </>
      ))}
      <Footer />
    </div>
  );
};
export default Index;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___slug, order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            slug
            base_color
            image_pc {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image_ipad {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image_sp {
              childImageSharp {
                fluid(maxWidth: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
