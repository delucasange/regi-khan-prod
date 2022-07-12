import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Next = ( ) => {
  const data = useStaticQuery(graphql`
  query Next ($title:String)  {
    posts: allSanityPost(
      sort: {fields: [publishedAt], order: DESC}
      filter: {categories: {elemMatch: {title: {eq:$title}}}}
    ) {
      nodes {
        title
        slug {
          current
      }
        id
        categories {
          title
        }
        publishedAt(formatString: "MMMM Do, YYYY")
      }
    }
  }
  `)
  console.log(data);
  
  return (
  <>
  <pre>{JSON.stringify(data, null, 4)}
 
  </pre>
  </>
  )
}

export default Next