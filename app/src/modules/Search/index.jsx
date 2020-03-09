import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { theme } from 'styled-tools'
import Language from "../../components/language" 
import IconSearch from "../../assets/images/ic_Search_2x.png"
import { Redirect } from 'react-router'


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
    width: 50px;
    border: none;
    background: #FFF;
    border-radius: 0px 4px 4px 0px;
    background-image: url(${IconSearch});
    background-repeat: no-repeat;
    background-size: 22px;
    background-position: center;
    background-color: ${theme('colors.light.main')};
`

const Search = () => {
    
    const [search, setSearch] = useState("")
    const [fireRedirect, setFire] = useState(null)
    
    const handleSubmit = (evt)=>{
        evt.preventDefault()
        setFire(search)
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={Language.ARS.placeholder.Search}
                type="text"
                name="search"
                required
            />
            {fireRedirect && <Redirect to={`/items?search=${search}`} />}
           
            <Button type="submit"></Button>
        </Form> 
    )
};
export default Search;