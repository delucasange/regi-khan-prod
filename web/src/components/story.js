import React from "react"
const Story = ({ videoSrcURL, videoTitle, ...props }) => (
  <iframe className="storyStyle" src={videoSrcURL} title={videoTitle} frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

)
export default Story