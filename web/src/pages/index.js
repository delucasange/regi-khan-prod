import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

const workIndex = ({ data, props }) => {
    console.log(data);
    const works = data.posts.nodes;

console.log(works);
return(
<>
<Layout>
{works.map((work) =>(
        <Link to={`/work/${work.slug.current}`}>
        <article key={work.id} >
            <img src={imageUrlFor(buildImageObj(work.mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
               alt={work.mainImage.alt}
            />
            <h1>{work.title}</h1>
            <p>{work.client}</p>
                <ul>{work.categories.map((category) => (
                    <li key={category._id}>{category.title}</li>
                  ))}</ul>
        </article></Link>
        ))}
</Layout>
<div>
    <h1>Hi</h1>
</div>

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