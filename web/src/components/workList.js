import { Link } from "gatsby";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";


const WorkList = ({works, title}) => {

    return ( 
      <>
      <h1 class="workListTitle">* { title }</h1>
      <div className="workList">
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
            <div className="infoBoxWL">
            <span className="mainInfoWL">
            <h1 className="projTitle">{work.title}</h1><p className="italic">for</p><p className="projClient">{work.client}</p>
            </span>
                <ul className="catWL">{work.categories.map((category) => (
                    <li key={category._id}>{category.title}</li>
                  ))}</ul>
            </div>
        </article></Link>
        ))}
      </div>  
      </>
     );
}
 
export default WorkList;