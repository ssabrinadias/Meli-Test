import React from "react";
import styled from 'styled-components'
import {GlobalStyles} from "../assets/style/GlobalStyles"
import Header from "../modules/header"


const StyleLayout = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: auto;
    padding: 0 5px;
    height: auto;
`

const Layout = ({children, header}) =>(
    <StyleLayout>
        <GlobalStyles />
        <Header/>
        {children}
    </StyleLayout>
)

export default Layout;