import React from 'react'

const Optimize = ({value}) => {
    console.log('Rendered');
  return <button>{value}</button>
  
}

export default React.memo(Optimize)
