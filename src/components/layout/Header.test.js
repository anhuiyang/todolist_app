import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Header from './Header'


describe('Header', ()=>{
    it('display h1 ToDoList', ()=>{
        const wrapper = Enzyme.shallow(<Header />)
        // expect(wrapper.find('h1').text()).toEqual('ToDoList')
        expect(wrapper.contains('ToDoList')).toEqual(true)
    })
})