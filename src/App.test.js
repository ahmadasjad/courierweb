import React from 'react';
import App from './App';
import { create } from 'react-test-renderer';

import Adapter from 'enzyme-adapter-react-16';
import {shallow,configure} from 'enzyme';
////enjyme
configure({adapter: new Adapter()});
describe("Given App structure",()=>{
    test("Then Routes should be rendred",()=>{
            const components=shallow(<App/>)
            // console.log(components.debug())
            const routesExist=components.find('Routes').exists();
            expect(routesExist).toBe(true)
            expect(components).toMatchSnapshot();
    })
})
