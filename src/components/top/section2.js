import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Section = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___slug, order: ASC }) {
        edges {
          node {
            frontmatter {
              title
              slug
              image_pc {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              image_ipad {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              image_sp {
                childImageSharp {
                  fluid(maxWidth: 149) {
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
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      pc_bottom: file(relativePath: { eq: "images/picture/pc_bottom.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      ipad: file(relativePath: { eq: "images/picture/ipad.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      sp: file(relativePath: { eq: "images/picture/sp.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      sp_top: file(relativePath: { eq: "images/picture/sp_top.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      sp_bottom: file(relativePath: { eq: "images/picture/sp_bottom.png" }) {
        childImageSharp {
          fluid {
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
      <h1 className="h1">
        Portfolio
        <span className="font-small">　印象派音楽を紹介するページ</span>
      </h1>
      {posts.map(({ node }) => (
        <div key={node.frontmatter.slug}>
          <h2 style={{ marginLeft: "10px" }}>~ {node.frontmatter.title} ~</h2>
          <div
            className="scroll-container display-flex"
            style={{ overflowY: "hidden" }}
          >
            <div className="position-relative height-fit">
              <div>
                <div className="title">
                  <h2 className="h2">web</h2>
                </div>
                <button aria-label="page">
                  <Link href={node.frontmatter.slug}>
                    <div className="pc">
                      <Img fluid={data.pc.childImageSharp.fluid} />
                      <div className="scroll-container pc_inner">
                        <Img
                          fluid={
                            node.frontmatter.image_pc.childImageSharp.fluid
                          }
                          style={{ width: "397px" }}
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
              <div className="title">
                <h2 className="h2">tablet</h2>
              </div>
              <button
                className="position-relative"
                style={{ margin: "0px 120px" }}
                aria-label="page"
              >
                <Link to={node.frontmatter.slug}>
                  <Img
                    className="ipad"
                    fluid={data.ipad.childImageSharp.fluid}
                  />
                  <div className="scroll-container ipad_inner">
                    <Img
                      fluid={node.frontmatter.image_ipad.childImageSharp.fluid}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Link>
              </button>
            </div>
            <div>
              <div className="title">
                <h2 className="h2">mobile</h2>
              </div>
              <button
                className="position-relative height-fit"
                style={{ paddingRight: "120px", padding: "0" }}
                aria-label="page"
              >
                <Link to={node.frontmatter.slug}>
                  <Img className="sp" fluid={data.sp.childImageSharp.fluid} />
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
                      fluid={node.frontmatter.image_sp.childImageSharp.fluid}
                    />
                  </div>
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Section;
