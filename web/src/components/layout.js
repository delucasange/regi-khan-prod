import React from "react";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";

const Layout = ({ children, siteTitle }) => (
  <>
    <Header siteTitle={ siteTitle || `Title` } />
    <Navigation />
  
    <div>{children}</div>
    <Footer />
  </>
);

export default Layout;
