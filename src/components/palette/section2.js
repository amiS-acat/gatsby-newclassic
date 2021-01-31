import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Section = () => {
  const data = useStaticQuery(graphql`
    {
      greffes: file(relativePath: { eq: "images/photo/greffes 2.png" }) {
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
      <section className="content-width">
        <div className="title">about Comporser & Music</div>
        <div className="comporser display-flex-block">
          <Img
            fluid={data.greffes.childImageSharp.fluid}
            style={{ flex: "1" }}
          />
          <div className="comporser-text" style={{ flex: "2" }}>
            チャールズ・トムリンソン・グリフス
            <br />
            (1884-1920)
            <br />
            アメリカ合衆国の作曲家・音楽教師
            <br />
            ヨーロッパ滞在中に、フランス印象派音楽のエキゾチックで神秘的な音に魅了され彼の作品に大きな影響を与えました。
            <br />
            <br />
            4つのローマのスケッチは1917年に出版された<br />白孔雀、夕暮れ、アクアパオラの噴水、雲の４曲のピアノ組曲です。
            <br />
            <br />
            各曲はウィリアムシャープのコレクション「Sospiridi　Roma」の詩からの抜粋に触発されており、序文が付けられています。
            <br />
            <span className="font-small">※ウィリアムシャープ（1855-1905）･･･英国の詩人</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
