import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Header from "../components/org/header";
import Footer from "../components/org/footer";

import SEO from "../components/seo";

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <>
      <Header />
      <SEO />
      {posts.map(({ node }) => (
        <Link to={node.frontmatter.slug}>
          <h2>{node.frontmatter.title}</h2>
        </Link>
      ))}
      <Footer />
    </>
  );
};
export default Index;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;
