import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

export default () => (
  <div>

    <Head />
    <Layout>
      <div className="top">
      </div>
      <div className="maincontainer">
        <div className="maincontainer__inner">
          <div className="main">
            <div className="main__inner">
              Hello world
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