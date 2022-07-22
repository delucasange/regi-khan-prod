import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Popup from './popup';

//  <div className="navWrap">
// </div>
const RespNav = () => {
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

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    return ( <>
  
  <div className="RespNavWrap">
    <button className="toggleMenu" role="menu"  onClick={togglePopup} onKeyDown={togglePopup}>Menu</button>
 
      {isOpen && 
    <Popup
      content={
        <>
      <div className="RespNavbar">
      {/* <h1 className="RespNavIntro">Regina Khanipova</h1> */}
      <ul className="RespOptions">
      <Link to="/about"><li>about</li></Link>
      {catPost.map( tag => ( 
        <Link key={tag.title} to={`/work/${tag.title}`} state={{ category:`${tag.title}` }} activeClassName="active-link">
        <li key={tag.title}> <p className="navtag">{tag.title}</p></li></Link>)
      )}
      <Link to="/"><li>All</li></Link>
      </ul>
      </div>
      </>
      }
      handleClose={togglePopup}
    />}
    </div>
    </> 
    
);
}
 
export default RespNav;