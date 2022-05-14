import React,{useState} from 'react'

function Input({showDiv}) {
    const [searchWord,setSearchWord]=useState("")
    return (
        <div>
            <input
                type="text"
                data-testid="searchBar"
                placeholder="search"
                onChange={(e)=>setSearchWord(e.target.value)}
            />
            <h1 data-testid="displaysearch">
                {searchWord}
            </h1>
            {
                showDiv && (<div data-testid="divWeWantToShow">
                    Hey My name is Mahtab
                </div>)
            }
        </div>
    )
}

export default Input
