import React, { useState } from 'react'

export default function Counter({initialValue}) {
  const [count,setCount] = useState(initialValue??0 );
  const handleAddClick =() =>{
    setCount((tempCount)=>tempCount+1);
  }
  const handleSubClick = () =>{
    setCount((tempCount)=>tempCount-1);
  }
  return (
    <div>
        <h1>Counter</h1>
        <h3>{count<0?"Not Allowed":count}</h3>
        <button data-testid = "Add" onClick={handleAddClick}>ADD</button>
        <button title='Subtract' onClick={handleSubClick}>SUB</button>
    </div>
  )
}