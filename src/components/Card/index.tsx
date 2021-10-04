import React from "react";

import { CardContainer, InfosContainer } from "./styles";

export const Card: React.FC = () => {
	return (
		<CardContainer>
			<div></div>
			<InfosContainer>
				<h2>Germany</h2>

				<h4>Population: <span>81.770.900</span></h4>
				<h4>Region: <span>Europe</span></h4>
				<h4>Capital: <span>Berlin</span></h4>
			</InfosContainer>
		</CardContainer>
	)
}