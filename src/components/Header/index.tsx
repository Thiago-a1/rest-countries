import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container, Toggle } from './styles';

export const Header: React.FC = () => {
	const { currentTheme, toggleTheme } = useContext(ThemeContext);

	function handleToggle () {
		toggleTheme();
	}

	return (
		<Container>
			<h1>Where in the world?</h1>

			<div>
				<Toggle 
					id="toggle" 
					currentTheme={currentTheme} 
					onClick={() => handleToggle()}/>
				<label htmlFor="toggle">Dark Mode</label>
			</div>
		</Container>
	);
}