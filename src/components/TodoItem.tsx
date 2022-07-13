import React from 'react'
import { item } from "./Todo"


const TodoItem = ({title,status}:item) => {

  return (
    <div>
        <h4 style={{textDecoration:status?"line-through":"none"}}>{title}</h4>
    </div>
  )
}

export default TodoItem