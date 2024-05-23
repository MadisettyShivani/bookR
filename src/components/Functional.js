import React, { useState } from 'react'

const Functional = (props) => {
    const [count, setcount]=useState(0);
  return (
    <div>
        <h1>this is class based component</h1>
        <h1>{props.name1}</h1>
        <h6>count:{count}</h6>
        <button onClick={()=>
            setcount (count +1)
        }>+</button>
        <button>some</button>
         <button onClick={()=>
            setcount (count -1)
        }>-</button>
    </div>
  )
}

export default Functional