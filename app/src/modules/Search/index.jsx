import React, { useState } from "react";
import styled from 'styled-components'


const Content = styled.div`
    display: flex;
`

const Form = styled.form ` 
    display: flex;
    width: 100%;
`

const Input = styled.input`
    height: 40px;
    padding: 10px;
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 4px 0px 0px 4px;
`

const Button = styled.button`
    height: 40px;
    border: none;
    background: #FFF;
    border-radius: 0px 4px 4px 0px;
`

const Search = () => {

    const [search, setSearch] = useState("")

    return (
        <Form>
            <Input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Nunca dejes de buscar"
                type="text"
                name="search"
                required
            />
           
            <Button type="submit">Submit</Button>
        </Form> 
    )
};
export default Search;