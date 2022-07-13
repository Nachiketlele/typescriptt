import React, { useState } from 'react'
import Button from './Button'
import Header from './Header'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = (value:number) =>{
        setCount(count+value)
    }
  return (
    <div>
        <Header label = "Counter"/>
        <Header label = {`${count}`}/>
        <Button label="ADD" handleClick={()=>handleClick(1)}/>
        <Button label="reduce" handleClick={()=>{
            if(count>0){
                handleClick(-1)
            }
        }}/>
    </div>
  )
}

export default Counter