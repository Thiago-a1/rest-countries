import styled from "styled-components";

export const Dashboard = styled.main`
	display: flex;
	flex-direction: column;

	margin: 32px auto;
	padding: 0 16px;

	@media (min-width: 620px) {
		padding: 0 32px;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	row-gap: 32px;

	width: 100%;

	margin-bottom: 32px;

	@media (min-width: 620px) {
		flex-direction: row;

		justify-content: space-between;

		padding: 0 16px;
	}
`;

export const CardsContainer = styled.div`
	display: flex;
	flex-direction: column;

	gap: 32px;

	@media (min-width: 440px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`;