import { Link } from "gatsby";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";


const WorkList = ({works, title}) => {

    return ( 
      <div className="workList">
        <h1>{ title }</h1>
        {works.map((work) =>(
        <Link to={`/work/${work.slug.current}`}>
        <article key={work.id} >
            <img src={imageUrlFor(buildImageObj(work.mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
               alt={work.mainImage.alt}
            />
            <h1>{work.title}</h1>
            <p>{work.client}</p>
                <ul>{work.categories.map((category) => (
                    <li key={category._id}>{category.title}</li>
                  ))}</ul>
        </article></Link>
        ))}
      </div>  
     );
}
 
export default WorkList;