import React from 'react'

const Card = ({children}) => {
  return(
    <div style={{padding:'20px',backgroundColor:'orange',fontVariantCaps:'revert',color:'black'}}>
    {children}
  </div>
  )
}

export default Card
