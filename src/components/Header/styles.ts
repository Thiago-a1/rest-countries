import styled from 'styled-components';

import moonLight from '../../assets/moon.svg';
import moonDark from '../../assets/moon-outline.svg';

interface ThemeProps {
	currentTheme: string;
}

export const Container = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	width: 100vw;
	padding: 24px 16px;

	background-color: ${props => props.theme.secondaryBackground};
	color: ${props => props.theme.primaryFontColor};
	box-shadow: 1px 1px 8px 1px rgba(8,8,8,0.1);

	h1 {
		font-size: 1rem;
	}

	div {
		display: flex;
		align-items: center;

		label {
			font-weight: 600;

			cursor: pointer;
		}
	}
`;

export const Toggle = styled.button<ThemeProps>`
	width: 1rem;
	height: 1rem;

	margin-bottom: 4px;
	margin-right: 8px;

	background-image: url(${props => props.currentTheme === 'dark' ? moonLight : moonDark});
	background-color: transparent;
	border: none;
`;