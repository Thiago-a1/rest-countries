import React, { useContext } from "react";

import { SearchContext } from "../../contexts/SearchContext";

import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Card } from "../../components/Card";

import { Dashboard, Container, CardsContainer } from "./styles";

export const Homepage: React.FC = () => {
	const { exibition } = useContext(SearchContext);

	return (
		<Dashboard>
			<Container >
				<Input />

				<Select />
			</Container>

				<CardsContainer>
					{exibition.map((country, index) => {
						return (
							<Card 
								key={index}

								flag={country.flag}
								name={country.name}
								population={country.population}
								region={country.region}
								capital={country.capital}
								code={country.alpha3Code}
							/>
						)
					})}
				</CardsContainer>
		</Dashboard>
	)
}