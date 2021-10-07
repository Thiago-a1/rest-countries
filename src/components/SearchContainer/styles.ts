import styled from "styled-components";

export const Container = styled.form`
	display: flex;
	flex-direction: column;

	row-gap: 32px;

	width: 100%;

	margin-bottom: 32px;

	@media (min-width: 620px) {
		flex-direction: row;

		justify-content: space-between;
	}
`;