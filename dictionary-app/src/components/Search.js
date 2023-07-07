import React from 'react'
import { useState } from "react";

function Search({ setSearch }) {
    const [input, setInput] = useState('');

    function handleChange(event) {
        setInput(event.target.value)
    }

    function handleSubmit(event) {
        if (event.key === 'Enter') {
            setSearch(input);
        }
    }

    return (
        <div className=" flex items-center justify-center pt-5">
            <input placeholder="search" value={input} onChange={handleChange} onKeyPress={handleSubmit} className=' outline-none rounded-md p-1'></input>
        </div>
    );
}

export default Search