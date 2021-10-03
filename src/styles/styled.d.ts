import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string,

		primaryBackground: string,
		secondaryBackground: string,

		inputBackground: string,

		primaryFontColor: string,
	}
}