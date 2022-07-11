import React from "react"
const Story = ({ videoSrcURL, videoTitle, ...props }) => (
  <div class="aspect-w-9 aspect-h-16">
  <iframe className="storyStyle" src={videoSrcURL} title={videoTitle} frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
)
export default Story