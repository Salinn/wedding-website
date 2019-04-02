import React from 'react'

export default props => {
  const {
    name,
    url,
    photo,
    alt
  } = props

  return (
    <div className='card col-12 p-5'>
      <a href={url} target="_blank">
        <img 
          src={photo} 
          alt={alt} 
          className='img-fluid'/>
        <p>{name}</p>
      </a>
    </div>
  )
}