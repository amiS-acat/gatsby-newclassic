// import React from "react"
// import { graphql , Link } from "gatsby"

// import Layout from "../components/layout"

// export default ({data}) => (
//     <Layout>
//         <div className="top">
//         <section className="content bloglist">
//             <div className="container">
//                 <h1 className="bar">RECENT POSTS</h1>
//                 <div className="posts">
//                     {data.allContentfulBlogPost.edges.map(({node})=>(
//                       <h3>{node.title}</h3>
//                     ))}
//                 </div>
//             </div>
//         </section>
//         </div>
//     </Layout>
// )

// export const query =graphql`
// {
//     allContentfulBlogPost(sort:{order:DESC}){
//         edges{
//             node{
//                 title
//                 id
//                 slug
//              }
//         }
//     }
// }
// `

//                     // <article className="post" key={node.id}>
//                         // <Link to={`/blog/post/${node.slug}/`}>
                      
//                         {/* </Link> */}
//                     // </article>