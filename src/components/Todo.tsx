import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Todoinput from './Todoinput'
import TodoItem from './TodoItem'
// import TodoItem from './TodoItem'


export interface item {
   title:string,
    status:boolean,
    id:number
}
const Todo = () => {
    const [data, setData] = useState<item[]>([])
    const [edit,setEdit] =useState("")
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


    const handleDelete = (id:number)=>{
          axios.delete(`http://localhost:8080/todos/${id}`)
          .then(getData)
          
    }


    const handleComplete = (id:number,complete:boolean)=>{
        axios.patch(`http://localhost:8080/todos/${id}/`,{status:complete})
        .then(getData)
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        setEdit(e.target.value)
        
    }
   
    const handleEdit = (id:any,ed:any)=>{
        axios.patch(`http://localhost:8080/todos/${id}/`,{title:ed})
        .then(getData)
         setEdit("")
    }

  return (
    <div>
        <Header label='Todos'/>
        <Todoinput onClick={handleAdd}/>
        {data.map((el)=>(
            <>
            <TodoItem key={el.id} {...el}/>
            <input type="text" onChange={handleChange} />
            <button onClick={()=>handleEdit(el.id,edit)}>EDIT</button>
            <input  type="checkbox" checked={el.status} onChange={()=>handleComplete(el.id,!el.status)}/>
            <button onClick={()=>handleDelete(el.id)}>DELETE</button>
            </>
        ))}
    </div>
  )
}

export default Todo