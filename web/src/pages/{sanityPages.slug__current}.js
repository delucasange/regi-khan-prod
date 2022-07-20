import { graphql } from "gatsby";
import React from "react";
import BioPortableText from "../components/bioPortableText";
import Layout from "../components/layout";
import Seo from "../components/seo";
// import { buildImageObj } from "../lib/helpers"
// import { imageUrlFor } from "../lib/image-url"

const Pages = ({ data }) => {

    console.log(data); 
    const pageTitle = data.sanityPages.name;
    const pageImageUrl = data.sanityPages.image.asset.url;

    const Bio = data.sanityPages._rawBio;

    console.log(Bio);

    return ( 
        <>
<Layout>
         <Seo title={pageTitle} />

   <div className="z-0 top-0 w-full flex flex-row h-screen">
      <div className="h-screen w-6/12 container bg-agent">
      <img className="m-auto my-28" src={pageImageUrl} alt={data.sanityPages.image.alt}/>
      </div>
      <div className="w-6/12 container">
        <div className="PageCont">
          <h1>{pageTitle}</h1>
          <div className="BioPortableText">
                {Bio && <BioPortableText blocks={Bio} />}
              </div>
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
    _rawBio
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