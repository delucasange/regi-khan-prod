import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { buildImageObj } from "../lib/helpers"
import { imageUrlFor } from "../lib/image-url"

const Pages = ({ data }) => {

    console.log(data); 
    const pageTitle = data.sanityPages.name;
    const pageImageUrl = data.sanityPages.image.asset.url;

    return ( 
        <>
<Layout>
         <Seo title={pageTitle} />

   <div className="z-0 top-0 w-full flex flex-row h-screen">
      <div className="h-screen w-6/12 container bg-agent">
      <img className="m-auto my-28" src={pageImageUrl} alt={data.sanityPages.image.alt}/>
      </div>
      <div className="w-6/12 container">
        <div className="m-auto px-40 my-52 font-favorit">
          <h1>{pageTitle}</h1>
          <p className="">{data.sanityPages.bio[0].children[0].text}</p>
        </div>
      </div>
   </div>
</Layout>
        </>
         );
}
export const query = graphql `
query MyQuery($id: String) {
  sanityPages(id: {eq: $id}) {
    slug {
      current
    }
    description
    name
    id
    bio {
      children {
        text
      }
    }
    image {
      asset {
        _type
        url
      }
      _type
      alt
    }
  }
}
`
 
export default Pages;