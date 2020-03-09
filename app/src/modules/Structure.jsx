import React from "react";
import styled from 'styled-components'
import {GlobalStyles} from "../assets/style/GlobalStyles"
import { ThemeProvider } from 'styled-components'
import Theme from "../assets/style/theme"
import { theme } from 'styled-tools'
import Header from "./Header"
import Breadcrumbs from "./Breadcrumbs"


const StyleLayout = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${theme('colors.light.main')};
`

const Layout = ({children, breadcrumb, header}) =>(
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <StyleLayout>
        {header && <Header/>}
            <Breadcrumbs categories={breadcrumb}/>
            {children}
        </StyleLayout>
    </ThemeProvider>
)

export default Layout;