import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "name.png" }) {
        childImageSharp {
          fixed(width: 170) {
            aspectRatio
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <div className="footer__inner">
        <a className="icon">
          <Link to={`/`}>
            <Img fixed={data.file.childImageSharp.fixed} />
          </Link>
        </a>
        <ul>
          <li className="map-btn">
            <a href="mailto:newclassNameic.ja&#64;gmail.com">contact</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
