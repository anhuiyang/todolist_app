import React from 'react';

class TodoItem extends React.Component {
    itemStyle = ()=>{
        return {
            background: this.props.todo.completed ? 'grey' : 'powderblue',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none', 
            borderRadius: '25px', 
            height: '20px',
            border: 'none',
            alignContent: 'center',
            alignSelf: 'center'
        }
    }

    render() {
        const{id, title} = this.props.todo;
        return (
        <div style={this.itemStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                { title } {' '}
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
            </p>
        </div>
        )
    }
}
const btnStyle = {
    background: 'grey',
    color: 'white',
    border: 'none',
    padding: '3.5px 7.5px',
    borderRadius: '75%', 
    cursor: 'pointer', 
    float: 'right'

}
export default TodoItem;
