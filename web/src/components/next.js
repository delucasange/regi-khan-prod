import React from "react";
import { useStaticQuery, graphql } from "gatsby"

const Next = ( {location} ) => {
  const data = useStaticQuery(graphql`
    {
      posts: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {}) {
        edges {
          node {
            title
            slug {
              current
            }
            id
            categories {
              title
            }
          }
        }
      }
    }
  `)

  const list = data.posts.edges;
  console.log({list});


  return (
    <button> Next →</button>

    );
}

export default Next

