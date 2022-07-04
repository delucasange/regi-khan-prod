import React from "react";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";
import RespNav from "./respNav";

const Layout = ({ children, siteTitle }) => (
  <>
    <Header siteTitle={ siteTitle || `Title` } />
    <Navigation />
    <RespNav />
  
    <div class="z-0">{children}</div>
    <Footer />
  </>
);

export default Layout;
