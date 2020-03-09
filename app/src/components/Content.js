import React from "react";
import styled from "styled-components";

const Box = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 880px;
	margin: 0 20px;
	align-self: center;
`;

const Content = ({ children }) => <Box>{children}</Box>;

export default Content;
