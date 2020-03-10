import React from 'react';
import styled from 'styled-components'
import { theme } from 'styled-tools'
import {Link} from "react-router-dom"
import Language from "../../components/language"
import IconFreeShipping from "../../assets/images/ic_shipping.png"

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
    text-align: center;
`
const Price = styled.span`
    display: flex;
    margin-bottom: 32px;
    font-size: 1.4em;
`

const FreeShipping = styled.div`
    margin-left: 10px;
`

const CatalogItem = ({item:{id, title, picture, state, free_shipping, price:{amount}}}) => (
    <LinkStyled to={`/items/${id}`}>
        <Image>
            <img src={picture} alt={title}/>    
        </Image>
        <Infos>
            <Price>
                {Language.currency.ARS} {amount}
                {free_shipping && <FreeShipping>
                    <img src={IconFreeShipping} alt="free shipping"/>
                </FreeShipping>}
            </Price>
            <Describe>
                <p>{title}</p>
            </Describe> 
        </Infos>
        <Local>
            {state.name}
        </Local>
    </LinkStyled>
)

export default CatalogItem;