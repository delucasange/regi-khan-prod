import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <iframe class="w-full aspect-video" src={videoSrcURL} title={videoTitle} frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

)
export default Video