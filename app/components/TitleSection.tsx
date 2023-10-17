import React from 'react'

interface Props {
  title?: string
}

const TitleSection = ({title}: Props) => {
  return (
    <h1 className='text-4xl'>{title}</h1>
  )
}

export default TitleSection