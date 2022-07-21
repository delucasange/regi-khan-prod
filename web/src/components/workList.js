import React from "react"
import { Link } from "gatsby"
import { buildImageObj } from "../lib/helpers"
import { imageUrlFor } from "../lib/image-url"


const WorkList = ({ works, title }) => {

    return ( 
      <>
      <div className="workList">
        {works.map((work) =>(
  <article className="group gridModule" key={work.id}>
            <Link to={`/work/${work.slug.current}`}>
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
          <p>
            <span className="gridTitle">{work.title}</span>
            <span className="gridItalic">for</span>
            <span className="gridClient">{work.client}</span>
          </p>
        </h1> 
        </div>
          <ul className="catWL">
            {work.categories.map((category) => (
                    <li key={category._id}>{category.title}</li>
                  ))}
          </ul>
          </div>
      </div>
      </Link>    
  </article>
  
        ))}
        
      </div>  
      {/* <h1 class="workListTitle">* { title }</h1> */}

      </>
     );
}
 
export default WorkList;