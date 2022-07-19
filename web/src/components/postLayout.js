import React  from "react";
import Footer from "./footer";
import Header from "./header";

import Next from './next';
import Back from './back';

const PostLayout = ({ children, siteTitle } ) => {

  return ( 
    <>
    <Header siteTitle={ siteTitle || `Title` } />

    <div className="navbarPost">
    <Back />
    <Next />
    </div>
    <div className="z-0">{children}</div>
    <Footer />
</>
   );
}
 
export default PostLayout;