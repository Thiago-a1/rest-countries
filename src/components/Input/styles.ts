import styled from "styled-components";

export const Container = styled.form`
	display: flex;
	flex-direction: row;
	align-items: center;

	width: 100%;
	max-width: 343px;
	height: 48px;

	padding: 0 16px;
	border-radius: 6px;

	background-color: ${props => props.theme.secondaryBackground};
	box-shadow: 1px 1px 8px 1px rgba(8,8,8,0.1);

	@media (min-width: 660px) {
		width: 100%;
		max-width: 480px;
	}

	input {
		font-weight: 600;

		width: 100%;

		outline: none;
		border: none;
		background-color: transparent;
		color: ${props => props.theme.inputFontColor};
	}
`;