import React, { useState } from "react";
import styled from 'styled-components'
import { theme } from 'styled-tools'
import Search from "../Search"
import Content from "../../components/Content"
import LogoImage from "../../assets/images/Logo_ML_2x.png"


const Container = styled.head`
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
    margin: 0 20px;
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
    <Container>
        <Content>
            <Box>
                <Logo>
                    <img src={LogoImage} alt="Logo Meli"/>
                </Logo>
                <Search/>
            </Box>
        </Content>
    </Container>
)

export default Header;