import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby"

const Test = ( ) => {
  const data = useStaticQuery(graphql`
    {
      posts: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {}) {
        nodes {
            slug {
              current
            }
            id
          }
        }
    }
  `)
  const list = data.posts.nodes;

  const Weird = (  ) => {

console.log(
    list.map((node)=> (
        <p key={node.id}>{node.slug.current}</p>
    ))
);
}

const testing = list.map((node) => node.slug.current );
const nextIndex = testing.indexOf('hp-introducing-mfj-d-printer-poker-test') + 1;
const nextUrl = list[`${nextIndex}`].slug.current;

console.log(nextIndex);
console.log(nextUrl);


  return (
    <Link to={`/work/${nextUrl}`}> Next →</Link>
    );
}

export default Test

