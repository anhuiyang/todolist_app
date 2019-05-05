import React from 'react'

class AddTodo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    onChange=(e) => this.setState({ [e.target.name]: e.target.value});
    
    onSubmit=(e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({title: ''})
    }

    render() {
    return (
    <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
        <input 
        className="todoInput"
        type="text" 
        name="title" 
        value={this.state.title}
        onChange={this.onChange}
        placeholder="Add todo..."/>
        <input 
        type="submit" 
        className="btn" 
        color="#333"/>
    </form>
    )
}
}

export default AddTodo
