import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({data}) => (
    <Layout>

    </Layout>
)

export const query =graphql`
    query{
        allContentfulBlogPost(sort:{order:DESC,fields:publishDate}){
            edges{
                node{
                    title
                }
            }
        }
    }
`