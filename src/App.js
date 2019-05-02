import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1, 
        title: 'React',
        completed: false
      },
      {
        id: 2, 
        title: 'Redux',
        completed: false
      },
      {
        id: 3, 
        title: 'GraphQL',
        completed: false
      }
    ]
  }
  markComplete = (id)=>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed = !todo.completed
      }
      return todo
    })})
  }
  delTodo=(id)=>{
    this.setState({todos: [...this.state.todos.filter(todo=>todo.id!==id)]})
  }
  render(){
    return (
      <div className="App">
      <Header style/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
