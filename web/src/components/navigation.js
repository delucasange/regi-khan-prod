import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Navigation = () => {
    const data = useStaticQuery(graphql`
    {
      allSanityPost(sort: {fields: categories____updatedAt, order: DESC}) {
        group(field: categories___title) {
          fieldValue
          totalCount
          field
        }
        totalCount
      }
    }
    `)
    console.log(data);
    const group = data.allSanityPost.group;

    return ( 
      <>
      <div className="navbar">
      <Link to="/">Index</Link>  
      <Link to="/about">about</Link> {group.map( tag=>(
        <Link to={`/work/${tag.fieldValue}`} state={{ filter: `${tag.fieldValue}` }} activeStyle={{ color: "red" }}>
        <li key={tag.fieldValue}> <p className="navtag">{tag.fieldValue}{tag.totalCount}</p></li></Link>)
      )}
      <li></li>
      </div>
      </>
     );
}
 
export default Navigation;