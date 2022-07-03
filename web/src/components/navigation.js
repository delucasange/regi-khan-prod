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
      allSanityPost {
        group(field: categories___title) {
          fieldValue
          totalCount
        }
        totalCount
      }
    }  
    `)
    console.log(data);
    const catPost = data.allSanityCategory.nodes;
    const group = data.allSanityPost.group;

    return ( 
      <>
      <div className="navbar">
      <Link to="/">Index</Link>  
      <Link to="/about">about</Link> {group.map( tag => (
        <Link to={`/work/${tag.fieldValue}`} state={{ category:`${tag.fieldValue}` }} activeStyle={{ color: "red" }}>
        <li key={tag.fieldValue}> <p className="navtag">{tag.fieldValue}{tag.totalCount}</p></li></Link>)
      )}
      </div>
      <div>
        <p>{catPost.map((cat)=> <li>{cat.title}</li> )}</p>
      </div>
      </>
     );
}
 
export default Navigation;