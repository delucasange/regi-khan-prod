import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Next = ( {currentUrl} ) => {
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
// map all posts with list map
const allPosts = list.map((node) => node.slug.current );
// console.log(allPosts);
// find the index of the current url but we convert it to a positive interger
// console.log(`${currentUrl}`);
let currentIndex = Math.abs(allPosts.indexOf(`${currentUrl}`));
// console.log(currentIndex);
// the total array counts number 0 so we have to have a minus 
let topNumber = allPosts.length - 1;
// console.log(topNumber);
// declare variable 
let next = 0;
if (currentIndex === 0 ) {
  next = 1
} if (currentIndex < topNumber) {
  next = currentIndex + 1
} else {
  next = 0
}
// console.log(next);
//get the slug of the index of next post
const nextUrl = list[`${next}`].slug.current;
// console.log(nextUrl);

  return (
<>
  <Link from={currentUrl} to={`/work/${nextUrl}`}> Next →</Link>
  </>
    );
}
export default Next

