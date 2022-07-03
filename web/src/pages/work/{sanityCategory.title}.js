import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo";
import WorkList from "../../components/workList";

const CategoryPage = ({ data, location }) => {
const works = data.posts.nodes;
console.log(data);

const { state = {} } = location;

const { category } = state;

console.log(category);

return (
<>
<Layout>
<Seo title={category} description={data.subtitle} />

<WorkList works={works} title={category}/>

</Layout>
</>
);
}
export const query = graphql`
  query allSanityPost($title:String){
    posts: allSanityPost(
      sort: {fields: [publishedAt], order: DESC}
      filter: {categories: {elemMatch: {title: {eq:$title }}}}
    ) {
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

export default CategoryPage