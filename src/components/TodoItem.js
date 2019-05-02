import React from 'react';

class TodoItem extends React.Component {
    render() {
        return (
        <div style={itemStyle}>
            <p>{ this.props.todo.title }</p>
        </div>
        )
    }
}

const itemStyle = {
    backgroundColor: 'powderblue'
}
export default TodoItem;
