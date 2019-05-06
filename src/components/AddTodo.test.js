import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter()})
import AddToDo from './AddTodo'
import { isTSAnyKeyword } from '@babel/types';

describe('AddTodo', ()=>{
    it('to have text input bar and submit button', ()=>{
        const wrapper = Enzyme.shallow(<AddToDo />)
        expect(wrapper.containsMatchingElement(<input type="text"></input>)).toBe(true)
        expect(wrapper.containsMatchingElement(<input type="submit"></input>)).toBe(true)
    })
})