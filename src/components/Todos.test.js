import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Todos from './Todos'
import ToDoItem from './TodoItem'

describe('Todos', ()=>{
    const todos = [
        {
        completed: false,
        _id: "5ccc69d37c909e243de7fb26",
        title: "React",
        createdAt: "2019-05-03T16:18:27.159Z",
        __v: 0
        },
    ]
    it('has todoitem component', ()=>{
        const markComplete = ()=>{}
        const delTodo = ()=>{}
        const wrapper = Enzyme.shallow(<Todos todos={todos} markComplete={markComplete} delTodo={delTodo}/>)
    expect(wrapper.containsMatchingElement(
            <ToDoItem key={todos[0].id} todo={todos[0]} markComplete={markComplete} delTodo={delTodo}/>
        )).toBe(true)
    })
})