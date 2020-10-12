import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

export default ({ location }) => (
    <div>
        <Head 
            pagetitle="ページが見つかりません"
            // pagepath={location.pathname}
        />
        <Layout>
            <p style={{ padding: "33vh 0 0 0", textAlign: "center", fontSize: "17px" }}>
                That page couldn't be found
            </p>
            <img src="../images/cup.png"
                style={{
                    margin: "34px auto",
                    display: "block",
                    padding: "0 0 18vh 0"
                }}
            />
        </Layout>

    </div>
)