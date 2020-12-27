import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const InnerLink = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
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
        <li>
          <Link to={node.frontmatter.slug}>{node.frontmatter.number}</Link>
        </li>
      ))}
    </ul>
  );
};
export default InnerLink;