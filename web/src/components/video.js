import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div class="aspect-w-16 aspect-h-9">
  <iframe className="videoStyle" src={videoSrcURL} title={videoTitle} frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
)
export default Video