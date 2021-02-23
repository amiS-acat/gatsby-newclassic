import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Header from "./header";

const Section = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { number: { eq: 1 } } }) {
        edges {
          node {
            frontmatter {
              title
              slug
              image_pc {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              image_ipad {
                childImageSharp {
                  fluid(maxWidth: 200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              image_sp {
                childImageSharp {
                  fluid(maxWidth: 149, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
      pc: file(relativePath: { eq: "images/picture/pc.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      pc_bottom: file(relativePath: { eq: "images/picture/pc_bottom.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      ipad: file(relativePath: { eq: "images/picture/ipad.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      sp: file(relativePath: { eq: "images/picture/sp.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      sp_top: file(relativePath: { eq: "images/picture/sp_top.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      sp_bottom: file(relativePath: { eq: "images/picture/sp_bottom.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      photos: file(relativePath: { eq: "images/picture/photos.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;

  return (
    <>
      <div className="scroll-top" id="a02"></div>
      <section>
        {posts.map(({ node }) => (
          <div key={node.frontmatter.slug}>
            <div className="content-width">
              <Header>{node.frontmatter.title} ~印象派の作曲家Debussyの作品を紹介するページ</Header>
            </div>
            <div className="scroll-container" style={{ overflowY: "hidden" }}>
              <div className="content-width display-flex">
                <div className="position-relative height-fit">
                  <div>
                    <button aria-label="page">
                      <Link to={node.frontmatter.slug} aria-label="page-link">
                        <div className="pc">
                          <Img fluid={data.pc.childImageSharp.fluid} />
                          <div className="scroll-container pc_inner">
                            <Img
                              fluid={
                                node.frontmatter.image_pc.childImageSharp.fluid
                              }
                              style={{ width: "401px" }}
                            />
                          </div>
                        </div>
                      </Link>
                      <Img
                        className="display-parts pc pc--bottom"
                        fluid={data.pc_bottom.childImageSharp.fluid}
                      />
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    className="position-relative"
                    style={{ margin: "0px 120px" }}
                    aria-label="page"
                  >
                    <Link to={node.frontmatter.slug} aria-label="page-link">
                      <Img
                        className="ipad"
                        fluid={data.ipad.childImageSharp.fluid}
                      />
                      <div className="scroll-container ipad_inner">
                        <Img
                          fluid={
                            node.frontmatter.image_ipad.childImageSharp.fluid
                          }
                          style={{ width: "200px" }}
                        />
                      </div>
                    </Link>
                  </button>
                </div>
                <div>
                  <button
                    className="position-relative height-fit"
                    style={{ paddingRight: "120px", padding: "0" }}
                    aria-label="page"
                  >
                    <Link to={node.frontmatter.slug} aria-label="page-link">
                      <Img
                        className="sp"
                        fluid={data.sp.childImageSharp.fluid}
                      />
                      <Img
                        className="display-parts sp"
                        fluid={data.sp_top.childImageSharp.fluid}
                        style={{ top: "0" }}
                      />
                      <Img
                        className="display-parts sp"
                        fluid={data.sp_bottom.childImageSharp.fluid}
                        style={{ bottom: "1px" }}
                      />
                      <div className="scroll-container sp_inner">
                        <Img
                          style={{ width: "150px" }}
                          fluid={
                            node.frontmatter.image_sp.childImageSharp.fluid
                          }
                        />
                      </div>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="top-pictures">
          <Img fluid={data.photos.childImageSharp.fluid} />
        </div>
      </section>
    </>
  );
};
export default Section;
