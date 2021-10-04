import styled from "styled-components";

export const Container = styled.select`
	position: relative;

	width: 171px;
	height: 48px;

	padding: 0 16px;

	border-radius: 6px;
	border-color: transparent;

	color: ${props => props.theme.primaryFontColor};
	background-color: ${props => props.theme.secondaryBackground};

	box-shadow: 1px 1px 8px 1px rgba(8,8,8,0.1);

	outline: none;
`;