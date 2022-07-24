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
{/* <div className="HeaderWrap">
    <Link to="/">
      <div class="relative flex flex-row overflow-x-hidden scrollbar-hide">
        <div class="whitespace-nowrap animate-marquee">
        <p className="headerStyle">{siteTitle} {data.sanitySiteSettings.subtitle}</p>
        </div>

        <div class="absolute top-0 animate-marquee2 whitespace-nowrap">
        <p className="headerStyle">{siteTitle} {data.sanitySiteSettings.subtitle}</p>
        </div>
      </div>
      <div className="z-0">
      <div></div>
      <h1 className="headerOption2 text-[3.8vw] text-center ">{siteTitle} {data.sanitySiteSettings.subtitle}</h1>
      </div>
    </Link>
</div> */}
<div className="headerO2">
    <Link to="/">
      <h1 className="h1HeaderO2">{siteTitle} <span className="hidden lg:inline-block">{data.sanitySiteSettings.subtitle}</span></h1>
    </Link>
</div>
  </>)
}

export default Header