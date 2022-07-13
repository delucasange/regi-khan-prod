import React from 'react';
import { Link } from 'gatsby';
import Next from './next';
import Back from './back';

//  <div className="navWrap">
// </div>
const PostNav = ( ) => {
 
    return ( <>
      <div className="navbarPost">
      <Back />
      <Next />
      </div>
    </> 
    
);
}
 
export default PostNav;