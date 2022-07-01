import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";


function BlogPostPreview(props, categories) {
  return (
    <Link to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto("format")
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <div>
        <h3>{props.title}</h3>
        {props._rawExcerpt && (
          <div>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
        <div>
          {format(new Date(props.publishedAt), "MMMM Mo, yyyy")}
        </div>
      </div>
    </Link>
  );
}

export default BlogPostPreview;
