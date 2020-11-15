import React from "react"

import Layout from "../components/layout"
import Main from "../components/main"
import FirstView from "../components/firstView"

const Index = () => {
  return (
    <>
      <Layout>
        <FirstView />
        <Main />
      </Layout>
    </>
  )
}

export default Index