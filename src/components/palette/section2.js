import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Section = () => {
  const data = useStaticQuery(graphql`
    {
      greffes: file(relativePath: { eq: "images/photo/greffes 2.png" }) {
        childImageSharp {
          fixed(width: 189) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <>
      <section className="content-width">
        <div className="title">Comporser</div>
        <div className="comporser display-flex-block">
          <Img
            className="img--comporser"
            fixed={data.greffes.childImageSharp.fixed}
            style={{ flex: "1" }}
          />
          <div className="comporser-text" style={{ flex: "2" }}>
            チャールズ・トムリンソン・グリフス
            <br />
            (1884-1920)
            <br />
            アメリカ合衆国の作曲家・音楽教師
            <br />
            ヨーロッパ滞在中に、フランス印象派音楽のエキゾチックで神秘的な音に魅了され後の作品に大きな影響を与えました。
            <br />
            4つのローマのスケッチは1917年に出版された印象派音楽です。
            <br />
            各曲は英国の詩人、ウィリアムシャープ（1855-1905）のコレクション「Sospiridi　Roma」の詩からの抜粋に触発されており、序文が付けられています。
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
