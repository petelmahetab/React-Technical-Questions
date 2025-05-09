import './App.css'
import { useState,useCallback } from 'react';

function App() {
  const [increment, setIncrement] = useState(0);
  const [toggle, setToggle] = useState(false);

  // useCallback Hook for memoize the Function not Value.
  const orgStructure = {
    department1: {
      teamA: ['Alice', 'Bob', 'Charlie'],
      teamB: ['David', 'Eva']
    },
    department2: {
      teamC: ['Frank', 'Grace'],
      teamD: ['Heidi', 'Ivan', 'Jack', 'Kim']
    },
    department3: {
      teamE: ['Leo']
    }
  }


  const checkValue=useCallback(
    () => {
      console.log("Expensive Tasks");
      let count=0;
      for(let dept in orgStructure)
     {
       for(let team in orgStructure[dept]){
         count+=orgStructure[dept][team].length;
       }
     }      
     return count;
    },
    [toggle],
  )

  
  // const checkValue= () => {
  //     console.log("Expensive Tasks");
  //     let count=0;
  //     for(let dept in orgStructure)
  //    {
  //      for(let team in orgStructure[dept]){
  //        count+=orgStructure[dept][team].length;
  //      }
  //    }      
  //    return count;
  //   }
    
   
function handleClick(){
  setIncrement((increment)=>increment+1);
  setToggle((pre)=>!pre);
  const memoResult=checkValue();
  console.log('Result '+memoResult);
}

  return (
    <>
      <h1>Hii, We are using UseCallBack Hook.</h1>
      <h2>{increment}</h2>
      <button onClick={handleClick}>Click me (+)</button>
    </>
  )
}

export default App
