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
    const Contact = data.sanityPages.description;
    console.log(Contact);
    // console.log(Bio);

    return ( 
        <>
<Layout>
         <Seo title={pageTitle} />

   <div className="page-wrap">
      <div className="rightwrap">
      <img className="AboutImage" src={pageImageUrl} alt={data.sanityPages.image.alt}/><p className="imgDesc">{data.sanityPages.image.alt}</p>
      </div>
      <div className="leftwrap">
        <div className="PageCont">
            <h1 className="PageTitle">{pageTitle}</h1>
            <div className="BioPortableText">
                  {Bio && <BioPortableText blocks={Bio} />}      
            </div>
          {Contact && <p className="Contact">{Contact}</p>}
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