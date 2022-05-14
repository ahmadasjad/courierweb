import {act, fireEvent, render} from '@testing-library/react';
import Button from './Button';

describe('Input Component', () => {
    it("render input",()=>{
        const {getByTestId}=render(<Button />)
        const button=getByTestId("button");
        // expect(button).toBeInTheDocument();
        expect(button).toBeTruthy();
    });
    it("render 1 button before button click",()=>{
        const {getAllByTestId}=render(<Button/>)
        const buttonList=getAllByTestId("button");
        expect(buttonList).toHaveLength(1);
    })
    it("render 2 button after button click",async ()=>{
        await act(async () => {
        const {getAllByTestId}=render(<Button/>)
        const buttonList=getAllByTestId("button");
        await fireEvent.click(buttonList[0]);
        expect(getAllByTestId("button")).toHaveLength(2);
        await act (async ()=>{
            const buttonList=getAllByTestId("button");
            await fireEvent.click(buttonList[1]);
            expect(getAllByTestId("button")).toHaveLength(1);
        })      
    })
    })
  
})
