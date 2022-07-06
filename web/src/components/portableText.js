import { PortableText as BasePortableText } from "@portabletext/react";
import React from "react";
import clientConfig from "../../client-config";
import { Figure } from "./Figure";
//import typography from '../typography.module.css'

const components = {
  types: {
    /* eslint-disable-next-line react/display-name */
    authorReference: ({ node }) => <span>{node?.author?.name}</span>,
    mainImage: Figure,
  },
  // styles: {
  //   blocks (props) {
  //     switch (props.style.children) {
  //       case 'person':
  //         return <span className="PersonStyle">{props.children}</span>

  //       case 'role':
  //         return <span className="RoleStyle">{props.children}</span>

  //       default:
  //         return <p className="p">{props.children}</p>
  //     }
  //   }
  // }
};


const PortableText = ({blocks}) => (
  <BasePortableText
    value={blocks}
    components={components}
    {...clientConfig.sanity}
  />
);

export default PortableText;
