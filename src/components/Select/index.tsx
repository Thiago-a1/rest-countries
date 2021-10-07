import React, { useContext } from "react";

import { SearchContext } from "../../contexts/SearchContext";

import { Container } from "./styles";

export const Select: React.FC = () => {
	const { selectSearch } = useContext(SearchContext);

	function handleSelect(option: string | undefined) {
		selectSearch(option);
	}

	return (
		<form>
			<Container 
				onChange={(event) => handleSelect(event.target.value)}
			>
					<option 
						value="" 
						hidden 
					>
						Filter by Region
					</option>
					<option value="Africa">Africa</option>
					<option value="Americas">Americas</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
			</Container>
		</form>
	)
}