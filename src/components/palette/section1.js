import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Page1 from "./peacock";
import Page2 from "./nightfall";
import Page3 from "./acqua";
import Page4 from "./clouds";

const Section = () => {
  const [page, setPage] = useState(0);

  const data = useStaticQuery(graphql`
    {
      peacock: file(relativePath: { eq: "images/picture/whitePeacock.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      nightfall: file(relativePath: { eq: "images/picture/nightfall.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      acqua: file(relativePath: { eq: "images/picture/acqua.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      clouds: file(relativePath: { eq: "images/picture/clouds.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <section>
        <div className="title content-width">Gallery</div>
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
                <div
                  id="a01"
                  className="page__top"
                  style={{ backgroundColor: "#d2d6d8" }}
                  onClick={() => setPage(0)}
                >
                  <button className="page__text">
                    close <div className="text--cross">×</div>
                  </button>
                </div>
                <Page1 />
              </>
            ) : page === 2 ? (
              <>
                <div
                  className="page__top"
                  style={{ backgroundColor: "#BAAEC1" }}
                  id="a01"
                  onClick={() => setPage(0)}
                >
                  <button className="page__text">
                    close <div className="text--cross">×</div>
                  </button>
                </div>
                <Page2 />
              </>
            ) : page === 3 ? (
              <>
                <div
                  className="page__top"
                  style={{ backgroundColor: "#239096" }}
                  id="a01"
                  onClick={() => setPage(0)}
                >
                  <button className="page__text">
                    close <div className="text--cross">×</div>
                  </button>
                </div>
                <Page3 />
              </>
            ) : page === 4 ? (
              <>
                <div
                  className="page__top"
                  style={{ backgroundColor: "#E5DFBF" }}
                  id="a01"
                  onClick={() => setPage(0)}
                >
                  <button className="page__text">
                    close <div className="text--cross">×</div>
                  </button>
                </div>
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
    </>
  );
};

export default Section;
