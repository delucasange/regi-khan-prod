import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo";
import WorkList from "../../components/workList";

const CategoryPage = ({ data, location }) => {
    const works = data.posts.nodes;
    console.log(data);
console.log(location.state.category);
return(
<>
<Layout>
<SEO title={location.state.category} description={data.subtitle} />

<WorkList works={works} title={location.state.category}/>

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