import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const Section = () => {
  const data = useStaticQuery(graphql`
    {
      peacock: file(relativePath: { eq: "images/photo/white peacock.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      sunset: file(relativePath: { eq: "images/photo/sunset.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      acquaPaola: file(relativePath: { eq: "images/photo/acquaPaola.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      clouds: file(relativePath: { eq: "images/photo/clouds.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      playBtn: file(relativePath: { eq: "images/icon/play-btn.png" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <section>
        <Img
          className="img-wrapper"
          fixed={data.peacock.childImageSharp.fixed}
        />
        <div>
          <div className="text-wrapper">
            白い孔雀
            <br />
            遠い森の中の青い煙の息吹のように、淡い
            <br />
            ここに、息吹のように、この美しさの魂のように
            <br />
            昼間の暑さの中を雲のように白く
            <br />
            白孔雀を移動させる
          </div>
        </div>
      </section>
      <section className="bg-lightGray">
        <Img
          className="img-wrapper"
          fixed={data.sunset.childImageSharp.fixed}
        />
      </section>
      <section>
        <Img
          className="img-wrapper"
          fixed={data.acquaPaola.childImageSharp.fixed}
        />
      </section>
      <section className="bg-lightGray">
        <Img
          className="img-wrapper"
          fixed={data.clouds.childImageSharp.fixed}
        />
      </section>
    </>
  );
};

export default Section;
