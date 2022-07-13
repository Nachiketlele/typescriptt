import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Todoinput from './Todoinput'
// import TodoItem from './TodoItem'


export interface item {
   title:string,
    status:boolean,
    id:number
}
const Todo = () => {
    const [data, setData] = useState<item[]>([])
    const handleAdd = (title:string) =>{
         const payload = {
            title,
            status:false,
            id:data.length+1
         }
         axios.post("http://localhost:8080/todos",payload)
         .then(getData)
        //  setData([...data,payload])
    }
    
    const getData = () =>{
        axios.get('http://localhost:8080/todos')
        .then((r)=>{
            setData(r.data)
        })
        
    }
    useEffect(()=>{
        getData()
    },[])


    const handleDelete = (id:any)=>{
          axios.delete(`http://localhost:8080/todos/${id}`)
          .then(getData)
          
    }


    const handleComplete = (id:any,complete:any)=>{
        axios.patch(`http://localhost:8080/todos/${id}/`,{status:complete})
        .then(getData)
    }


  return (
    <div>
        <Header label='Todos'/>
        <Todoinput onClick={handleAdd}/>
        {data.map((el)=>(
            <>
            {/* <TodoItem key={el.id} {...el}/> */}
            <h4 style={{textDecoration:el.status?"line-through":"none"}}>{el.title}</h4>
            <input  type="checkbox" checked={el.status} onChange={()=>handleComplete(el.id,!el.status)}/>
            <button onClick={()=>handleDelete(el.id)}>DELETE</button>
            </>
        ))}
    </div>
  )
}

export default Todo