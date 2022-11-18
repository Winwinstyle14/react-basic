import React from 'react'

const TodoList = (props) => {
    
    const todoItemStyle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: props.todoPros.completed ? 'line-through' : 'none'
      }
    
      const deleteButtonStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
      }
     
      const handleComplete = props.handleCompletef;
      const handleDelete = props.handleDelete;

      
  return (
    <div style={todoItemStyle}>
      
        <input 
        type="checkbox" 
        onChange={handleComplete.bind(this, props.todoPros.id)} 
        checked={props.todoPros.completed}
        />
            {props.todoPros.title}
            <button style={deleteButtonStyle} onClick={handleDelete.bind(this, props.todoPros.id)}>Xoa</button>
    </div>
  )
}

export default TodoList