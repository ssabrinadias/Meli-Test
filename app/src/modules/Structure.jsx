import React from "react";
import styled from 'styled-components'
import {GlobalStyles} from "../assets/style/GlobalStyles"
import { ThemeProvider } from 'styled-components'
import Theme from "../assets/style/theme"
import { theme } from 'styled-tools'
import Header from "./Header"


const StyleLayout = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${theme('colors.light.main')};
`

const Layout = ({children}) =>(
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <StyleLayout>
            <Header/>
            {children}
        </StyleLayout>
    </ThemeProvider>
)

export default Layout;