import React, { useState } from "react";

import { Container } from "./styles";

export const Select: React.FC = () => {
	const [value, setValue] = useState('');

	function handleSelect () {
		
	}

	return (
		<Container onChange={(event) => setValue(event.target.value)}>
				<option 
					value="" 
					hidden 
				>
					Filter by Region
				</option>
				<option value="Africa">Africa</option>
				<option value="America">America</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
		</Container>
	)
}