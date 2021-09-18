import {act, fireEvent, render} from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
    it("render input",()=>{
        const {getByTestId}=render(<Input showDiv={false}/>)
        const input=getByTestId("searchBar");
        expect(input).toBeInTheDocument();
        // expect(input).toBeTruthy();
    });
    it("render div",()=>{
        const {getByTestId}=render(<Input showDiv={true}/>)
        const div=getByTestId("divWeWantToShow");
        // expect(div).toBeInTheDocument();
        expect(div).toBeTruthy();
    });
    it("Don't render div",()=>{
        const {queryByTestId}=render(<Input showDiv={false}/>)
        const div=queryByTestId("divWeWantToShow");
        // expect(div).toBeInTheDocument();
        expect(div).toBeFalsy();
    });
    it('Changes on input causes changes on Header',async()=>{
        await act(async()=>{
            const {getByTestId}=render(<Input showDiv={true}/>)
            const input=getByTestId("searchBar");
            const header=getByTestId("displaysearch");
            const inputWord="Pedro";
            await fireEvent.change(input,{target:{value:inputWord}});
            expect(header.innerHTML).toBe(inputWord);
        })
    })
})
