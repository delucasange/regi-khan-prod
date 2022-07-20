// import { differenceInDays, formatDistance, format } from "date-fns";
import Container from "./container";
import PortableText from "./portableText";
import React from "react";
// import { buildImageObj } from "../lib/helpers";
// import { imageUrlFor } from "../lib/image-url";
import Video from "./video";
import Story from "./story";


function BlogPost( props ) {

  const {
    _rawBody,
    categories,
    // id,
    slug,
    title,
    client,
    videos,
    stories,
    serializers,
    // mainImage,
// publishedAt,
  } = props;

const currentSlug = slug.current;
// console.log(currentSlug);

console.log(_rawBody);


return (
    <>
    <div className="titleBox">
                <h1><span className="mainTitle">{title}</span><span className="mainItalic">for</span><span className="mainClient">{client}</span></h1>  
    </div>
    <article>
      <Container>
              
        <div>
  
          
          {videos && (  
            <div className="videoCont">
               {videos.map((video)=> <Video key={video.title} videoSrcURL={video.url} videoTitle={video.title} />
               )}
            </div>
          )}


      {stories && (  
            <div className="storyCont">
               {stories.map((story)=> <Story key={story.title} videoSrcURL={story.url} videoTitle={story.title} />
               )}
            </div>
          )}
          {/* <div className="credits">
              <p>CREDITS ↓</p>
          </div> */}
          <div className="projectCopy">
              {/* {mainImage && mainImage.asset && (
                <div>
                  <img
                    src={imageUrlFor(buildImageObj(mainImage))
                      .width(1200)
                      .height(Math.floor((9 / 16) * 1200))
                      .fit("crop")
                      .auto("format")
                      .url()}
                    alt={mainImage.alt}
                  />
                </div>
              )} */}
              <div className="portableText">
                {_rawBody && <PortableText blocks={_rawBody} serializers={serializers} />}
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
