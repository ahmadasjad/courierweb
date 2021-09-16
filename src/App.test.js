import React from 'react';
import App from './App';
import { create } from 'react-test-renderer';
import {shallow} from 'enzyme';
////enjyme
const components=shallow(<App/>)

/////snapshot
describe('My first snapshot test',()=>{
    test('testing childs', () => {
    let tree = create(<App />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})