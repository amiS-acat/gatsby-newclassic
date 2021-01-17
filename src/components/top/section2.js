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
      <div className="scroll-top" id="a01"></div>
      <h1 className="h1">Section2</h1>
      {posts.map(({ node }) => (
        <div key={node.frontmatter.slug}>
          <div className="title">
            <h2 className="h2">
              <Link to={node.frontmatter.slug} key={node.frontmatter.slug}>
                {node.frontmatter.title}
              </Link>
            </h2>
          </div>
          <div className="scroll-container display-flex">
            <div className="position-relative height-fit max-width-100">
              <Img className="pc" fluid={data.pc.childImageSharp.fluid} />
              <Img
                className="display-parts pc"
                fluid={data.pc_bottom.childImageSharp.fluid}
                style={{ bottom: "0" }}
              />
              <div className="scroll-container pc_inner">
                <Img
                  fluid={node.frontmatter.image_pc.childImageSharp.fluid}
                  style={{ width: "400px" }}
                />
              </div>
            </div>
            <div className="position-relative" style={{ margin: "0 120px" }}>
              <Img className="ipad" fluid={data.ipad.childImageSharp.fluid} />
              <div className="scroll-container ipad_inner">
                <Img
                  fluid={node.frontmatter.image_ipad.childImageSharp.fluid}
                  style={{ width: "200px" }}
                />
              </div>
            </div>
            <div
              className="position-relative height-fit"
              style={{ paddingRight: "120px" }}
            >
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
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Section;
