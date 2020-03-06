import React, { useState } from "react";
import styled from 'styled-components'


const Content = styled.div`
    display: flex;
`

const Search = () => {

    const [search, setSearch] = useState("")

    return (
        <form>
            <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Nunca dejes de buscar"
                type="text"
                name="search"
                required
            />
           
            <button type="submit">Submit</button>
        </form> 
    )
};
export default Search;