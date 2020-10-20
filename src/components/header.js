import React from "react"
import { Link , useStaticQuery , graphql } from "gatsby"
import Img from "gatsby-image"
 
export default () =>{
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "name.png"}) {
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

  return(
    <header className="header">
      <div className="header__inner">
        <div className="icon">
            <Link to={`/`}>
              <Img fixed={data.file.childImageSharp.fixed}/>
            </Link>
        </div>
        <button className="mobile-menu__btn">
            <span></span>
            <span></span>
            <span></span>
        </button>
      </div>
    </header>
  )
  }