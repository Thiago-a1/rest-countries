import React, { useContext } from "react";

import { SearchContext } from "../../contexts/SearchContext";

import { Button } from "../../components/Button";

import { 
	Dashboard, 
	InfosContainer, 
	PrimaryInfos, 
	SecondaryInfos,
	BorderInfoContainer } from "./styles";

export const Detail: React.FC = () => {
	const { details, getNameByCode, selectSearch } = useContext(SearchContext);

	return (
		<Dashboard>
			<Button 
				selectSearch={selectSearch} 
				content="Back" 
				icon={true} 
				link="/"/>

			<InfosContainer>
				<img src={details.flag} alt="flag" />

				<div>
					<h2>{details.name}</h2>
					<div className="infos">

						<PrimaryInfos>
							<h4>Native Name: 
								<span> {details.nativeName}</span>
							</h4>
							<h4>Population:
								<span> {details.population.toLocaleString(
									'en-US', {style: 'decimal'}
									)}
								</span>
							</h4>
							<h4>Region:
								<span> {details.region}</span>
							</h4>
							<h4>Sub Region:
								<span> {details.subregion}</span>
							</h4>
							<h4>Capital:
								<span> {details.capital ? details.capital : ' No Capital'}
								</span>
							</h4>
						</PrimaryInfos>

						<SecondaryInfos>
							<h4>Top Level Domain:
								{details.topLevelDomain.map(
									(domain, index) => {
										return <span key={index}> {domain}</span>
									}
								)}
							</h4>
							<h4>Currencies: 
								{details.currencies ? details.currencies.map(
									(currenci, index) => {
										return <span key={index}> {currenci.name}</span>
									}
								) : <span> No Currencies</span> }
							</h4>
							<h4>Languages:
								{details.languages.map(
									(language, index) => {
										return <span key={index}> {language.name},</span>
									}
								)}
							</h4>
						</SecondaryInfos>
					</div>

					<BorderInfoContainer>
					<h3>Border Countries:</h3>

					<div>
						{
							!details.borders ? 
								<span>No borders</span> : 
								details.borders.map(
								(border, index) => {
									return (
										<Button 
											key={index} 
											selectSearch={selectSearch}
											name={getNameByCode(border)} 
											link={`${border}`}/>
									)
								}
						)}
					</div>
				</BorderInfoContainer>
				</div>
			</InfosContainer>
		</Dashboard>
	)
}