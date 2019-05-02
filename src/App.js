import React from 'react';
import './App.css';
import Todos from './components/Todos'

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
  render(){
    return (
      <div className="App">
      <Todos todos={this.state.todos}/>
      </div>
    );
  }
}
export default App;
