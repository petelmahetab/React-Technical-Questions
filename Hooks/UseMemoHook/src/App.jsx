import './App.css'
import { useState, useMemo } from 'react'

function App() {
  const [increment, setIncrement] = useState(0)
  const [toggle, setToggle] = useState(false)

  function handleClick() {
    setIncrement(prev => prev + 1)
    setToggle(prev => !prev) 
  }

  const optimize = useMemo(() => {
    console.log('Expensive Task is Running')
    let j = 1
    for (let i = 1; i <= 1000000000; i++) { 
      j += i
    }
    return j
  }, [toggle])

  return (
    <>
      <h1>Hello, We are Using Memoize concept</h1>
      <h2>Increment: {increment}</h2>
      <h2>Expensive Result: {optimize}</h2>
      <button onClick={handleClick}>Click Increment (+)</button>
    </>
  )
}

export default App
