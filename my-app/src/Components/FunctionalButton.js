import React from 'react'

function FunctionalButton() {
    function clickedButton(){
        console.log("Button Clicked.")
    }
  return (
    <div>
        <button onClick={clickedButton}>Click Me</button>
    </div>
  )
}

export default FunctionalButton