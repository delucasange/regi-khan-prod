import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Next = ( ) => {
  const data = useStaticQuery(graphql`
    {
      posts: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {}) {
        nodes {
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
  `)

const list = data.posts.nodes;
const allPosts = list.map((node) => node.slug.current );
const nextIndex = allPosts.indexOf('hp-introducing-mfj-d-printer-poker-test') + 1;
const nextUrl = list[`${nextIndex}`].slug.current;
console.log(allPosts);
console.log(nextIndex);
console.log(nextUrl);


  return (

    <Link to={`/work/${nextUrl}`}> Next →</Link>

    );
}

export default Next

