import React from "react";
import styled from 'styled-components'
import {GlobalStyles} from "../assets/GlobalStyles"


const StyleLayout = styled.section`
position: relative;
display: flex; 
flex-direction: column;
`

const Layout =  (children) =>(
    <StyleLayout>
        {children}
    </StyleLayout>
)

export default Layout;