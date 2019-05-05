import './App.css';
import React from 'react';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null, 
      isLoaded: false,
      todos: null
    }
  }

  componentDidMount(){
    fetch("http://localhost:1234/")
    .then(res=>res.json())
    .then(
      (result)=>{
        this.setState({
          isLoaded: true, 
          todos: result
        })
      }, 
      (error)=>{
        this.setState({
          isLoaded: true, 
          error
        })
      }
    )
  }

  markComplete=(_id)=>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo._id===_id){
        todo.completed = !todo.completed
      }
      return todo
    })})
  }

  delTodo=(_id)=>{
    fetch(`http://localhost:1234/${_id}`, {
      method: 'delete'
    }).then((resonse)=>{
      return resonse.json();
    }).then((data)=>{
      this.setState({todos: [...this.state.todos.filter(todo=>todo._id!==_id)]})
    })
  }

  addTodo=(title)=>{
    fetch('http://localhost:1234/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title: title})
    }).then((response)=>{
      return response.json();
    }).then((data)=>{
        this.setState({todos: [...this.state.todos, data]})
    });
  }
  
  render(){
    const{error, isLoaded, todos} = this.state
    if (error) {
      return <div>{error}</div>
    }else if(!isLoaded){
      return <div>Loading...</div>
    }else{
      return (
        <div className="App">
        <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
        </div>
      );
    }
    
  }
}

export default App;
