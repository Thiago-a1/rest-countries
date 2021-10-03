import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 87.5%;
	}

	body {
		background-color: ${props => props.theme.primaryBackground};
	}

	body, input, button, text-area {
		font-family: 'Nunito Sans', sans-serif;
	}

	button {
		cursor: pointer;
	}
`;