import React from "react";
import styled, { css } from 'styled-components'
import { theme } from 'styled-tools'

const type = {
    primary: css`
        background: ${theme('buttons.primary.color')};
        color: ${theme('buttons.primary.mainText')};
    `,
}

const ButtonStyled = styled.button`
    border: none;
    padding: 10px;
    border-radius: 4px;
    ${({ primary }) => primary && type.primary}
    ${({ fluid }) => fluid && css`
        width: 100%;
    `}
`
const Button = ({
    children,
    onClick,
    ...others
}) =>(
    <ButtonStyled
        onClick={onClick}
        {...others}
    >
        {children}
    </ButtonStyled>
)

export default Button;