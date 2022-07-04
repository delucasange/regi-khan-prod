import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

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

    return ( 
      <>
      <div className="w-full flex flex-row">
      <Link to="/">Index</Link>  
      <Link to="/about">about</Link>
  
      {catPost.map( tag => ( 
        <Link key={tag.title} to={`/work/${tag.title}`} state={{ category:`${tag.title}` }} activeStyle={{ color: "red" }}>
        <li key={tag.title}> <p className="navtag">{tag.title}</p></li></Link>)
      )}
      </div>
      </>
     );
}
 
export default Navigation;