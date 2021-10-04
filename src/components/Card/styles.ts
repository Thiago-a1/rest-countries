import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;

	width: 256px;

	margin: 0 auto;

	border-radius: 6px;

	background-color: ${props => props.theme.secondaryBackground};

	div {
		width: 100%;
		height: 160px;
	}
`;

export const InfosContainer = styled.div`
	padding: 8px 32px;

	color: ${props => props.theme.primaryFontColor};
	h2 {
		margin-bottom: 16px;
	}

	h4 {
		font-weight: 600;
		margin-bottom: 6px;

		span {
			font-weight: 300;
		}
	}
`;