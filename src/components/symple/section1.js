import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Section = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/photo/debussy.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <section style={{ marginBottom: "40px" }}>
      <div className="top-img-wrapper">
        <Img className="top-img" fluid={data.file.childImageSharp.fluid} />
        <div className="textBox">
          Claude Debussy
          <br />
          <span className="font--mini">
            <span className="from400-none">クロード </span>ドビュッシー
          </span>
          <br />
          <div style={{ margin: "2% 0" }} className="from00-none" >
            French <br/>
            1862 - 1918
          </div>
          <div
            className="font-small sp-diplay-none"
            style={{ marginTop: "2%" }}
          >
            彼は印象派の先駆けと言われている20世紀で最も影響力のある作曲家の１人
            <span className="from400-none">です。</span>
            <br />
            <span className="sp-display-none">
              麗しい曲調でロマンチックな作品を多く残しており現代でも特に女性の間で人気が高いです。
              <br />
              そんな人気の一方で、当時は女ぐせの悪さや非社交的態度から音楽界の要職に推薦されてもドビュッシーを嫌う人にことごとく潰されてしまい、お金に苦労した人生だったとか。
            </span>
            <span className="to500-none">
              麗しい曲調の一方彼は女ぐせの悪さや非社交的態度から音楽会で評判が悪く要職につける実力がありながらお金に苦労した人生だったとか。
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
