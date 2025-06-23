import React from 'react'

const Dynamic = ({title,content}) => {
  return (
    <div style={{border:'1px solid white',backgroundColor:'green',color:'black',padding:'20px'}}>
        <h1>{title}</h1>
        <p>{content}</p>
    </div>
  )
}

export default Dynamic