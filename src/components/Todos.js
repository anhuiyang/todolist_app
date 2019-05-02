import React from 'react';
import ToDoItem from './TodoItem';
class Todos extends React.Component {
    render(){
        return this.props.todos.map((todo)=>(
            <ToDoItem key={todo.id} todo={todo}/>
        ))
    }
}


export default Todos;
