import React from 'react'
import Title from '../utils/atoms/Title'
import Registry from './Registry'

export default (props) => {
  const { 
    registries
  } = props

  console.log(props)

  const generatedRegistries = registries.map(registry => <Registry {...registry} />)

  return (
    <div className="container text-center mb-5">
      <Title content="Where we are registered" />
      <div className="row">
        { generatedRegistries }
      </div>
    </div>
  )
}