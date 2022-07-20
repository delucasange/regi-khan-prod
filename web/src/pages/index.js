import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo";
import WorkList from "../components/workList";

const workIndex = ({ data }) => {
const works = data.posts.nodes;

console.log(works);

return(
<>
<Layout>
<Seo title="Index" description={data.subtitle} />

<WorkList works={works} title="All Works"/>
</Layout>
</>
);
}
export const query = graphql`
fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }
    {
    posts: allSanityPost(
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) 
    {
      nodes {
        title
        slug {
          current
        }
        id
        client
        _rawExcerpt(resolveReferences: {maxDepth: 10})
        categories {
          id
          title
        }
        mainImage {
          alt
          asset {
            _id
            url
          }
          crop {
            bottom
            left
            right
            top
            _type
            _key
          }
          hotspot {
            _key
            _type
            height
            width
            x
            y
          }
        }
        publishedAt(formatString: "MMMM Do, YYYY")
      }
    }
  }
`
export default workIndex