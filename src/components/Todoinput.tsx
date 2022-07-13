import React, { useState } from 'react'

interface TODOS{
    onClick : (value:string) => void
}


const Todoinput = ({onClick}: TODOS) => {
    const [value, setValue] = useState("")
    const handleClick: React.ChangeEventHandler<HTMLInputElement> = (e) =>{
         setValue(e.target.value)
    }

   const handleAdd:React.MouseEventHandler<HTMLButtonElement> = ()=>{
    onClick(value)
    setValue("")
   }
  return (
    <div>
        <input type="text" value={value} onChange={handleClick}/>
        <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default Todoinput