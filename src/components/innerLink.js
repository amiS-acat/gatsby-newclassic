import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const InnerLink = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___slug, order: ASC }) {
        edges {
          node {
            frontmatter {
              title
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
    <>
      {posts.map(({ node }) => (
        <li key={node.frontmatter.slug}>
          <Link to={node.frontmatter.slug} aria-label="link">
            {node.frontmatter.number}. {node.frontmatter.title}
          </Link>
        </li>
      ))}
    </>
  );
};
export default InnerLink;
