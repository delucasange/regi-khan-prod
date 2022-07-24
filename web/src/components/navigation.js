import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

//  <div className="navWrap">
// </div>
const Navigation = ( ) => {
    const data = useStaticQuery(graphql`{
      allSanityCategory(sort: {fields: order, order: ASC}) {
        nodes {
          title
          order
          id
        }
      }
    }  
    `)
    const catPost = data.allSanityCategory.nodes;

    return ( <>
      <div className="navbar">
      <Link to="/about" activeClassName="active-link"><li>about</li></Link>
  
      {catPost.map( tag => ( 
        <Link key={tag.title} to={`/work/${tag.title}`} state={{ category:`${tag.title}` }} activeClassName="active-link">
        <li key={tag.title}> <p className="navtag">{tag.title}</p></li></Link>)
      )}
      <Link to="/" activeClassName="active-link"><li>All</li></Link>
      </div>
    </> 
    
);
}
 
export default Navigation;