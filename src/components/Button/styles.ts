import styled from "styled-components";

export const ButtonContainer = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 96px;
	height: 28px;
	
	border: none;
	border-radius: 3px;

	background-color: ${props => props.theme.secondaryBackground};
	color: ${props => props.theme.primaryFontColor};

	box-shadow: 1px 1px 4px 1px rgba(8,8,8,0.4);

	span {
		font-size: 0.9rem;
	}
`;