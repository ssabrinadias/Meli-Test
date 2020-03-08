import React, { useState } from "react"
import styled from 'styled-components'
import { theme } from 'styled-tools'
import Search from "../Search"
import Content from "../../components/Content"
import LogoImage from "../../assets/images/Logo_ML_2x.png"


const HeaderContent = styled.header`
    display: flex;
    justify-content: center;
    padding: 5px 0;
    background: ${theme('colors.primary.main')};
`
const Logo = styled.div`
    display: flex; 
    align-items: center;
    width: 50px;
    height: 40px;
    margin-right: 20px;
    img {
        display: block;
        width: 100%;
        height: auto;
    }

`
const Box = styled.div`
    display: flex;
`

const Header = () =>(
    <HeaderContent>
        <Content >
            <Box>
                <Logo>
                    <img src={LogoImage} alt="Logo Meli"/>
                </Logo>
                <Search/>
            </Box>
        </Content>
    </HeaderContent>
)

export default Header;