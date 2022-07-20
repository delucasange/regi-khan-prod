import { PortableText as BasePortableText } from "@portabletext/react";
import React from "react";
import clientConfig from "../../client-config";
import { Figure } from "./Figure";


const components = {
  types: {
    /* eslint-disable-next-line react/display-name */
    authorReference: ({ node }) => <span>{node?.author?.name}</span>,
    mainImage: Figure,    
    },
  };

  const serializers = {
    marksDefs: {
      link: ({mark, children}) => {
        // Read https://css-tricks.com/use-target_blank/
        const { blank, href } = mark
        return blank ?
          <a href={href} target="_blank" rel="noopener">{children}</a>
          : <a href={href}>{children}</a>
      },
    },
  };

const PortableText = ({blocks} ) => (
  <BasePortableText
    value={blocks}
    components={components}
    serializers={serializers} 
    {...clientConfig.sanity} />
);

export default PortableText;
