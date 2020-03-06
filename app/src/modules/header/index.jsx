import React, { useState } from "react";
import styled from 'styled-components'
import Search from "../../components/search"
import LogoImage from "../../assets/images/Logo_ML_2x.png"


const Content = styled.head`
    display: flex;
`
const Logo = styled.div`
    display: flex;
`


const Header = () =>(
    <Content>
        <Logo>
            <img src={LogoImage}/>
        </Logo>
        <Search/>
    </Content>
)

export default Header;