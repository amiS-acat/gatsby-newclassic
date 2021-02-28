import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Section = () => {
  const data = useStaticQuery(graphql`
    {
      picture3: file(relativePath: { eq: "images/picture/picture3.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  useEffect(() => {
    let targets = document.querySelectorAll(".scrollAnime--item");

    window.addEventListener("scroll", function () {
      var scroll = window.scrollY;
      var h = window.innerHeight;

      for (let target of targets) {
        var pos = target.getBoundingClientRect().top + scroll;
        if (scroll > pos - h) {
          target.classList.add("is-animated");
        }
      }
    });
  });

  return (
    <div className="top-pictures">
      <Img
        className="scrollAnime--item"
        fluid={data.picture3.childImageSharp.fluid}
      />
    </div>
  );
};
export default Section;
