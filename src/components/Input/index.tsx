import { FormEvent, useContext, useState } from "react";

import { IoMdSearch } from 'react-icons/io';

import { ThemeContext } from "styled-components";
import { SearchContext } from "../../contexts/SearchContext";

import { Container } from './styles';

export const Input: React.FC = () => {
	const { inputFontColor } = useContext(ThemeContext);
	const { inputSearch } = useContext(SearchContext);

	const [country, setCountry] = useState<string>('');

	function handleInputSearch(event: FormEvent) {
		event.preventDefault();

		inputSearch(country);
	}

	return (
		<Container onSubmit={(event) => handleInputSearch(event)}>
				<IoMdSearch 
					size={22} 
					color={inputFontColor} 
					style={{ margin: "0 16px" }}/>
				<input 
					type="text" 
					placeholder="Search for a country..." 
					value={country} 
					onChange={(event) => setCountry(event.target.value)}
				/>
		</Container>
	)
}