import React,{useState,useEffect} from 'react'
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
const Todo = () => {
    const [todo,setTodo] = useState([
     
    ]);
    useEffect(()=> {
        const todoGet = async  () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
               setTodo(res.data)
            } catch (error) {
                console.log(error)
                
            }
        }
        todoGet()
    },[])



    const handleComplete = id=>{
        const newTodo = todo.map(item => {
            if(item.id === id)
                item.completed = !item.completed;

            
            return item;
        })
        setTodo(newTodo);
    }

    const handleDelete = (id) => {

        const newTodo1 = todo.filter(win =>{
           return win.id !== id;

        })
        setTodo(newTodo1);
    }

    const handleAdd1 = async title =>{
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/todos',
            {
                title: title,
                completed: false,
            }
            )
            const newTodo = [...todo,res.data];
            setTodo(newTodo);
           
        } catch (error) {
            console.log(error)
            
        }
    }
    
    

  return (
    <div>
        <AddTodo handleAdd1={handleAdd1}></AddTodo>
      {todo.map((item) => {
        return (
            <TodoList key={item.id}  todoPros={item} handleCompletef={handleComplete} handleDelete={handleDelete}></TodoList>
        )

      })}

        

    </div>
  )
}

export default Todo