import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Header = () => {
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


  return (
  <>

<div className="HeaderWrap">
    <Link to="/">
      <div class="relative flex flex-row overflow-x-hidden">
        <div class="whitespace-nowrap">
        <h1 className="headerStyle">&nbsp;{siteTitle} {data.sanitySiteSettings.subtitle}</h1>
        </div>

        <div class="absolute top-0 whitespace-nowrap">
        <h1 className="headerStyle">&nbsp;{siteTitle} {data.sanitySiteSettings.subtitle}</h1>
        </div>
      </div>
    </Link>
</div>
  </>)
}

export default Header