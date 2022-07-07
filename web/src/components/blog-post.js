// import { differenceInDays, formatDistance, format } from "date-fns";
import Container from "./container";
import PortableText from "./portableText";
import React from "react";
//import { buildImageObj } from "../lib/helpers";
//import { imageUrlFor } from "../lib/image-url";
import Video from "./video";

function BlogPost(props) {
  const {
    _rawBody,
    categories,
    title,
    client,
    videos,
//  mainImage,
// publishedAt,
  } = props;

console.log({_rawBody});
  return (
    <>
    <article>
      <Container>
        <div>
        <div className="titleBox">
          <h1><span className="mainTitle">{title}</span><span className="mainItalic">for</span><span className="mainClient">{client}</span></h1>  
          </div>
          

          {videos && (  
            <div>
               {videos.map((video)=> <Video key={video.title} videoSrcURL={video.url} videoTitle={video.title} />
               )}
            </div>
          )}

            <div className="portableText">
          {_rawBody && <PortableText blocks={_rawBody} />}
          </div>

         
            {/* {publishedAt && (
              <div>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? formatDistance(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Mo, yyyy")}
              </div>
            )} */}
            {categories && (     
              <div className="categoriesPost">
                <p className="tagsTitle">TAGS</p> <ul>
                  {categories.map((category) => (
                    <li key={category._id} className="capitalize">{category.title}</li>
                  ))}
                </ul>
              </div>
            )}

        </div>
      </Container>
    </article>
    </>

  );
}
//      {mainImage && mainImage.asset && (
//  <div>
//  <img
//    src={imageUrlFor(buildImageObj(mainImage))
//      .width(1200)
//      .height(Math.floor((9 / 16) * 1200))
//      .fit("crop")
//      .auto("format")
//     .url()}
//    alt={mainImage.alt}
//  />
//</div>
//)}

export default BlogPost;
