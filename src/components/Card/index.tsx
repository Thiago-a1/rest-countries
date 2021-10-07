import { useContext } from "react";
import { useHistory } from "react-router";

import { SearchContext } from "../../contexts/SearchContext";

import { CardContainer, FlagContainer, InfosContainer } from "./styles";

interface Infos {
	flag: string;
	name: string;
	population: number;
	region: string;
	capital: string;
	code: string;
}

export const Card = (
	{
		flag,
		name, 
		population, 
		region, 
		capital,
		code}: Infos) => {
	const { countryDetails } = useContext(SearchContext);
	
	const history = useHistory();

	function handleCardDetails(code: string) {
		countryDetails(code);
	}
	
	return (
		<CardContainer onClick={() => [history.push(`/detail/${code}`), handleCardDetails(code)]}>
			<FlagContainer>
				<img src={flag} alt="flag" />
			</FlagContainer>
			<InfosContainer>
				<h2>{name}</h2>

				<h4>Population:
					<span> {population.toLocaleString(
						'en-US', {style: 'decimal'}
						)}
					</span>
				</h4>
				<h4>Region: <span>{region}</span></h4>
				<h4>Capital: <span>{capital}</span></h4>
			</InfosContainer>
		</CardContainer>
	)
}