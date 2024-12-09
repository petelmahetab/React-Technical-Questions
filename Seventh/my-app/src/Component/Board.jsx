import React from 'react'
import { useState } from 'react'

function Square({value}){
//Use State
const [move, setmove] = useState(null)


function onChangeMove(){
  setmove('x')
}
return(
    <div>
        <button onClick={onChangeMove}>{value}</button>
    </div>
)
}

function Board() {
  return (
    <>
    <div className='board-row'>
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div className='board-row'>
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div className='board-row'>
      <Square/>
      <Square/>
      <Square/>
    </div>
    </>
  )
}

export default Board
