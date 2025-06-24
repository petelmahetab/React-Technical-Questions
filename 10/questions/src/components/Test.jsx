import React from 'react'
import {useToggle} from './Toggle'

const Test = () => {

    const [IsOpen, setIsOpen] = useToggle();
  return (
    
      <button onClick={setIsOpen}>{IsOpen ? 'Close':'Open'}</button>
    
  )
}

export default Test
