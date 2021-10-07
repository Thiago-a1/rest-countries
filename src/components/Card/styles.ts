import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	max-width: 288px;

	margin: 0 auto;

	border-radius: 6px;

	background-color: ${props => props.theme.secondaryBackground};
	box-shadow: 1px 1px 8px 1px rgba(8,8,8,0.1);

	cursor: pointer;
`;

export const FlagContainer = styled.div`
	display: flex;
	align-content: flex-start;

	img {
		width: 100%;
		height: 192px;

		border-radius: 6px 6px 0 0;
	}
`;

export const InfosContainer = styled.div`
	height: 192px;

	padding: 8px 32px;

	color: ${props => props.theme.primaryFontColor};
	h2 {
		margin: 16px 0;
	}

	h4 {
		font-weight: 600;
		margin-bottom: 6px;

		span {
			font-weight: 300;
		}
	}
`;