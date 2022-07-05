import { differenceInDays, formatDistance, format } from "date-fns";
import Container from "./container";
import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

function BlogPost(props) {
  const {
    _rawBody,
    categories,
    title,
    client,
    mainImage,
    publishedAt,
  } = props;
  return (
    <article>
 {mainImage && mainImage.asset && (
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
      )}
      <Container>
        <div>
          <div>
            <h1>{title}</h1>
            <p>{client}</p>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside>
            {publishedAt && (
              <div>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? formatDistance(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Mo, yyyy")}
              </div>
            )}
            {categories && (     
                <ul>
                  {categories.map((category) => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default BlogPost;
