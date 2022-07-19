import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      sanitySiteSettings {
        title
        subtitle
        keywords
      }
    }
  `)

  const siteTitle = data.sanitySiteSettings.title;

  return (<>
  <div className="z-40 absolute">
  <Link to="/">
    <h1 className="headerStyle">{siteTitle} {data.sanitySiteSettings.subtitle}</h1>
    </Link>
  </div>
  </>)
}

export default ComponentName