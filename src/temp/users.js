import { cleanup } from '@testing-library/react';
import React from 'react'

function Users({user}) {
    const {id,name,age}=user; 
    const legal=age>=18?(
        <h1 style={{color:"green"}}>{name}</h1>
    ):(
        <h1 style={{color:"red"}}>{name}</h1>    
    )
    return (
        <div data-testid={`user-${id}`}>
            {legal}
        </div> 
    )
}

export default Users
