import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default ({ data }) => (
  <div>
    <Head />
    <Layout>
      <div className="top"></div>
      <div className="maincontainer">
        <div className="maincontainer__inner">
          <div className="main">
            <div className="main__inner">
              <div className="posts">
                {data.allContentfulBlogPost.edges.map(({ node }) => (
                  <Link to={`/blog/post/${node.slug}/`}>
                    <h3>{node.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="sub"></div>
        </div>
      </div>
      <div className="bottom"></div>
    </Layout>
  </div>
)

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          contents {
            json
          }
          title
          slug
        }
      }
    }
  }
`
