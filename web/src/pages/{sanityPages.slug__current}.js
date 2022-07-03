import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Pages = ({data}) => {

    console.log(data);
    const pageTitle = data.sanityPages.name;
    return ( 
        <>
        <Layout>
         <Seo title={pageTitle} />
   
        <h1>{pageTitle}</h1>
        </Layout>
        </>
         );
}
export const query = graphql `
query MyQuery($id:String){
    sanityPages(id:{eq:$id}) {
      slug {
        current
      }
      description
      name
      id
    }
  }
`
 
export default Pages;