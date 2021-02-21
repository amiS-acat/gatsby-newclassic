import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

import Page1 from "./peacock";
import Page2 from "./nightfall";
import Page3 from "./acqua";
import Page4 from "./clouds";

const Section = () => {
  const pageNumber = 2;

  const [page, setPage] = useState(0);

  const data = useStaticQuery(graphql`
    {
      peacock: file(relativePath: { eq: "images/picture/whitePeacock.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      nightfall: file(relativePath: { eq: "images/picture/nightfall.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      acqua: file(relativePath: { eq: "images/picture/acqua.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      clouds: file(relativePath: { eq: "images/picture/clouds.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      markdownRemark {
        frontmatter {
          number
        }
      }
    }
  `);

  return (
    <>
      <section>
        <div className="title content-width">Music</div>
        <div className="gallery">
          <div className="content-width">
            <div className="gallery-item gallery-item--top">
              <button
                className="Instax Instax--right"
                aria-label="instax"
                onClick={() => setPage(1)}
              >
                <Img fluid={data.peacock.childImageSharp.fluid} />
              </button>
              <button
                className="Instax Instax--left"
                aria-label="instax"
                onClick={() => setPage(2)}
              >
                <Img fluid={data.nightfall.childImageSharp.fluid} />
              </button>
            </div>
            <div className="gallery-item gallery-item--bottom">
              <button
                className="Instax Instax--right"
                aria-label="instax"
                onClick={() => setPage(3)}
              >
                <Img fluid={data.acqua.childImageSharp.fluid} />
              </button>
              <button
                className="Instax Instax--left"
                aria-label="instax"
                onClick={() => setPage(4)}
              >
                <Img fluid={data.clouds.childImageSharp.fluid} />
              </button>
            </div>
          </div>
        </div>
      </section>
      {page >= 1 ? (
        <div className="page">
          <section className="page-container">
            {page === 1 ? (
              <>
                <button
                  id="a01"
                  className="page__top"
                  style={{ backgroundColor: "#d2d6d8" }}
                  onClick={() => setPage(0)}
                >
                  <div className="page__text" aria-label="close">
                    close <div className="text--cross">×</div>
                  </div>
                </button>
                <Page1 />
              </>
            ) : page === 2 ? (
              <>
                <button
                  className="page__top"
                  style={{ backgroundColor: "#BAAEC1" }}
                  id="a01"
                  onClick={() => setPage(0)}
                >
                  <div className="page__text" aria-label="close">
                    close <div className="text--cross">×</div>
                  </div>
                </button>
                <Page2 />
              </>
            ) : page === 3 ? (
              <>
                <button
                  className="page__top"
                  style={{ backgroundColor: "#239096" }}
                  id="a01"
                  onClick={() => setPage(0)}
                >
                  <div className="page__text" aria-label="close">
                    close <div className="text--cross">×</div>
                  </div>
                </button>
                <Page3 />
              </>
            ) : page === 4 ? (
              <>
                <button
                  className="page__top"
                  style={{ backgroundColor: "#E5DFBF" }}
                  id="a01"
                  onClick={() => setPage(0)}
                >
                  <div className="page__text" aria-label="close">
                    close <div className="text--cross">×</div>
                  </div>
                </button>
                <Page4 />
              </>
            ) : (
              ""
            )}
          </section>
        </div>
      ) : (
        ""
      )}
      <div className="prev">
        <Link to={`/page${pageNumber - 1}/`} aria-label="link">◀︎ prev</Link>
      </div>
    </>
  );
};

export default Section;
