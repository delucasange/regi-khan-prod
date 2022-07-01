import React from "react";

const Footer = () => {
    return ( <>
        <footer>
      <div>
        <div>
          &copy; {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
    </>
     );
}
 
export default Footer;