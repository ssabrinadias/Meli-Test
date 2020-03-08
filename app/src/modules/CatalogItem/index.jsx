import React from 'react';
import styled from 'styled-components'
import { theme } from 'styled-tools'
import {Link} from "react-router-dom";  

const LinkStyled = styled(Link)`
    display: flex;
    color: ${theme('colors.secondary.main')};
`
const Infos = styled.div`
    padding-top: 16px;
    flex-basis: 60%;
`
const Describe = styled.h2`
    font-size: 1em;
`
const Image = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 4px;
    margin-right: 16px;
    img {
        display: block;
        width: 100%;
    }
`
const Local =  styled.span`
    display: block;
    padding-top: 16px;
    font-size: 0.7em;
    flex-basis: 30%;
`
const Price = styled.span`
    display: block;
    margin-bottom: 32px;
    font-size: 1.4em;
`

const CatalogItem = ({item:{id, title, picture, state, price:{amount}}})=> (
    <LinkStyled to={`/items/${id}`}>
        <Image>
            <img src={picture} alt={title}/>    
        </Image>
        <Infos>
            <Price>
                $ {amount}
            </Price>
            <Describe>
                <p>{title} </p>
                <p>Completo Unico!???</p>
            </Describe> 
        </Infos>
        <Local>
            {state.name}
        </Local>
    </LinkStyled>
)

export default CatalogItem;