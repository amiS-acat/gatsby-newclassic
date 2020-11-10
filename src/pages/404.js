import React from "react"

import Layout from "../components/layout"

const notFound = () => {
    return (
        <div>
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
}

export default notFound