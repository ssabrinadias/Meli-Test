import React from "react";
import styled from 'styled-components'
import {GlobalStyles} from "../assets/style/GlobalStyles"
import { ThemeProvider } from 'styled-components'
import theme from "../assets/style/theme"
import Header from "./Header"
import Content from "../components/Content"


const StyleLayout = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
`

const Layout = ({children, header}) =>(
    <StyleLayout>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header/>
            {children}
        </ThemeProvider>
    </StyleLayout>
)

export default Layout;