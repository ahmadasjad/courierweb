import {cleanup, render, screen } from '@testing-library/react';
import Users from './users';
import renderer from 'react-test-renderer';


test("Leagal user Test",()=>{
    const user={id:2,name:"jony",age:21};
    render(<Users user={user}/>)
    const userElement=screen.getByTestId(`user-${user.id}`)
    expect(userElement).toBeInTheDocument();
    expect(userElement).toHaveTextContent(`${user.name}`);
    expect(userElement).toContainHTML("green");
})
test("matches snapshot",()=>{
    const user={id:2,name:"jony",age:21};
    const tree=renderer.create(<Users user={user}/>).toJSON();
    expect(tree).toMatchSnapshot();
})





afterEach(()=>{
    cleanup();
})