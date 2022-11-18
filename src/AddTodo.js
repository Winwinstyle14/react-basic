import React,{useState} from 'react'

const AddTodo = (props) => {
    const [title,setTitle] = useState('');

    const handleAdd1 = props.handleAdd1;

    const handleAdd = (e) => {
        setTitle(e.target.value);
    }
    const addSingleTodo=(e) => {
        e.preventDefault();
        if(title !== ''){
            handleAdd1(title);
            setTitle('')
        }

    }

  return (
    <form onSubmit={addSingleTodo}>
        <input type="text" name="title" placeholder="nhap .." onChange={handleAdd} value={title}/>
        <input type="submit" value="submit" />
    </form>
  )
}

export default AddTodo