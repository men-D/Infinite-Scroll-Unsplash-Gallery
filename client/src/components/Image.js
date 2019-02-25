import React from 'react'

export default function image({image}) {
  return <img className = 'single-photo' src={image.urls.thumb} alt=''/>
}
