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
  
    <div className="z-0">{children}</div>
  </>
);

export default Layout;
