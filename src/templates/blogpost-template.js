import React from "react"
import { graphql, Link } from "gatsby"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import Head from "../components/head"

export default ({ location, data, pageContext }) => (
  <div>

    <Layout>
      <Head
        // pagetitle={data.contentfulBlogPost.title}
        // pagepath={location.pathname}
      />
      <div className="top">
      </div>
      <div className="maincontainer">
        <div className="maincontainer__inner">
          <div className="main">
            <div className="main__inner">
              <h2 class="playlist__text">{data.contentfulBlogPost.title}</h2>

              {/* {documentToReactComponents(data.contentfulBlogPost.iframe.json)} */}

            </div>
          </div>
          <div className="sub">
          </div>
          <div className="postlink">
            <ul className="postlink__ul">
              {pageContext.next &&(
                <li className="prev">
                  <Link to={`/blog/post/${pageContext.next.slug}/`} rel="prev">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span> {pageContext.next.title}</span>
                  </Link>
                </li>
              )}
              {pageContext.previous &&(
                <li className="next">
                  <Link to={`/blog/post/${pageContext.previous.slug}/`} rel="next">
                    <span>{pageContext.previous.title} </span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Layout>

  </div>
)

export const query = graphql`
  query($id: String!){
    contentfulBlogPost(id: { eq: $id }){
      title

      category{
        category
        categorySlug
        id
      }
    }
  }
`

// nodes{
//   markdownContent{
//     childMarkdowmRemark{
//       html
//     }
//   }
// }
// richTextContent{
//   json
// }