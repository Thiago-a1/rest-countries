import styled from "styled-components";

export const Dashboard = styled.main`
	display: flex;
	flex-direction: column;

	margin: 32px auto;
	padding: 0 48px;
`;

export const InfosContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	width: 100%;
	margin: 48px auto;

	img {
		width: 100%;
		height: 192px;
	}

	div h2 {
		margin: 48px auto 16px auto;
		color: ${props => props.theme.primaryFontColor};
	}

	@media (min-width: 920px) {
		flex-direction: row;

		margin: 64px auto;

		img {
			flex: 1;

			width: 100%;
			height: 440px;

			margin-right: 64px;
		}

		div {
			flex: 1;

			.infos {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
		}
	}
`;

export const PrimaryInfos = styled.div`
	h4 {
		font-weight: 600;

		margin-bottom: 10px;

		color: ${props => props.theme.primaryFontColor};

		span {
			font-weight: 300;
		}
	}
`;

export const SecondaryInfos = styled.div`
	margin: 32px auto;

	h4 {
		font-weight: 600;

		margin-bottom: 10px;

		color: ${props => props.theme.primaryFontColor};

		span {
			font-weight: 300;
		}
	}

	@media (min-width: 720px) {
		margin: 0;
	}
`;

export const BorderInfoContainer = styled.div`
	color: ${props => props.theme.primaryFontColor};

	div {
		display: flex;
		flex-direction: row;

		flex-wrap: wrap;
		row-gap: 8px;
		column-gap: 8px;

		width: 100%;

		margin: 16px auto;
	}

	@media (min-width: 920px) {
		display: flex;
		flex-direction: row;
		align-items: center;

		margin: 32px auto;

		h3 {
			margin-right: 16px;
		}
	}
`;