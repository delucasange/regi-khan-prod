import React  from "react";
import Footer from "./footer";
import Header from "./header";


const PostLayout = ({ children, siteTitle } ) => {

  return ( 
    <>
    <Header siteTitle={ siteTitle || `Title` } />
    <div className="z-0">{children}</div>
    <Footer />
</>
   );
}
 
export default PostLayout;