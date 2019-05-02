import React from 'react';

class Todos extends React.Component {
    render(){
        return this.props.todos.map((todo)=>{
            <h3>{ todo }</h3>
        })
    }
}
export default Todos;
