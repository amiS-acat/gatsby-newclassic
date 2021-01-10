import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Section = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/photo/cat.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <>
      <h1 className="h1">Profile</h1>
      <div
        className="content-width display-flex-block text-align-left-center"
        style={{ marginBottom: "30px" }}
      >
        <Img
          fixed={data.file.childImageSharp.fixed}
          className="border-radius"
        />
        <div style={{ margin: "auto" }}>
          澤井 安海
          <br />
          音楽大学を卒業
          <br />
          人に価値を知らせる物を作成したいと思い
          <br />
          紆余曲折を経て独学でwebデザインを学ぶ
          <br />
          分かりやすさと早い表示速度を心がけている。
          <br />
          ペット可物件に引っ越し、猫を迎え入れて贅沢させることが目標。
        </div>
      </div>
    </>
  );
};
export default Section;
