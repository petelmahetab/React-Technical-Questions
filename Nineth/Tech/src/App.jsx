import React from 'react'
import { useState } from 'react'
function App() {
  // Q1.We have to create an 3 checkboxes for COOUNTRIES With selected And when user Selects on that then We get An (Cross) logo and when we click that then that SELECTED field will be Deleted.
  //State change when user Click any one of them .
  const [Array, setArray] = useState([
    {
      name:"India",checked:false
    },
    {
      name:"Bangladesh",checked:false
    },
    {
      name:"Nepal",checked:false
    },
  ])
  const handleClick=(index)=>{
      //for toggling
      Array[index].checked = !Array[index].checked;
      setArray([...Array])
  };

  const deleteCountry=(index)=>{
    const updatedArray=[...Array];
    updatedArray.splice(index,1);
    setArray(updatedArray)
  }

  return (
    <div style={{listStyle:"none"}}>
      {
        Array.map((n,index)=>{
          return (
            <div key={index} style={{listStyle:"none",display:'flex'}}>
              <input type='checkbox' checked={n.checked} onClick={()=>{
                handleClick(index);
              }}/>
              <li>{n.name}</li>

              {/* The Cross ternary name true checked then render Span tag  or false we give empty*/}
              {
                n.checked ?<span onClick={()=>deleteCountry(index)}>&#x2715;</span>:''
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default App
