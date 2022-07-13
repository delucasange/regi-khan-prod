import React from "react";
import Footer from "./footer";
import Header from "./header";
import PostNav from "./postnav";

const PostLayout = ({ children, siteTitle }) => (
  <>
    <Header siteTitle={ siteTitle || `Title` } />
    <PostNav />
  
    <div className="z-0">{children}</div>
    <Footer />
  </>
);

export default PostLayout;
