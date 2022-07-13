import { Link } from "gatsby";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";


const WorkList = ({works, title}) => {

    return ( 
      <>
      <div className="workList">
        {works.map((work) =>(
        <Link to={`/work/${work.slug.current}`}>
  <article className="group gridModule" key={work.id} >

            <img className="gridMImg" src={imageUrlFor(buildImageObj(work.mainImage))
              .width(4143)
              .height(Math.floor((3 / 4) * 4143))
              .fit("crop")
              .auto("format")
              .url()}
               alt={work.mainImage.alt}
            />

         <div>
      <div className="mMargin">
      <div className="gridtitleBox">
            <h1>
                <p className="gridTitle">{work.title}</p><p className="gridItalic">for</p><p className="gridClient">{work.client}</p>
            </h1> 
        </div>
          <ul className="catWL">
            {work.categories.map((category) => (
                    <li key={category._id}>{category.title}</li>
                  ))}
          </ul>
          </div>
      </div>
      
  </article></Link>
        ))}
      </div>  
      <h1 class="workListTitle">* { title }</h1>

      </>
     );
}
 
export default WorkList;