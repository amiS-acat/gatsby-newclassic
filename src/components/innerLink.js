import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const InnerLink = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark (sort: {fields: frontmatter___slug ,order: ASC} ){
        edges {
          node {
            frontmatter {
              number
              slug
            }
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.edges;

  return (
    <ul>
      {posts.map(({ node }) => (
        <li key={node.frontmatter.slug}>
          <Link to={node.frontmatter.slug}>{node.frontmatter.number}</Link>
        </li>
      ))}
    </ul>
  );
};
export default InnerLink;