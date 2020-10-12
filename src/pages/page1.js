import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

export default ({location}) => (
  <div>

    <Layout>
      <Head 
        pagetitle="playlist 1"
        // pagepath={location.pathname}
      />
      <div className="top">
      </div>
      <div className="maincontainer">
        <div className="maincontainer__inner">
          <div className="main">
            <div className="main__inner">
              {/* <section class="section3"> */}
                <div class="playlist__text">
                  <h2>play list 1</h2>
                  {/* <!-- <span>~印象派の人達 piano~</span> --> */}
                </div>
                {/* <iframe
                  style={["max-width:100%", "max-height:100%"]} width="560" height="315"
                  src="https://www.youtube.com/embed/videoseries?list=PL068aLKKwpNAujFHRiexmlYza33e8IA1P"
                  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen /> */}
              {/* </section> */}
              <ul>
                <li><Link to={`/`}>Top</Link></li>
                <li><Link to={`/page1/`}>Page1</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub">
          </div>
        </div>
      </div>
    </Layout>

  </div>
)