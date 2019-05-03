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
        const{_id, title} = this.props.todo;
        return (
        <div style={this.itemStyle()}>
            <div key={_id}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, _id)} /> {' '}
                { title } {' '}
                <button className="deleteBtn" onClick={this.props.delTodo.bind(this, _id)}>X</button>
            </div>
        </div>
        )
    }
}

export default TodoItem;
