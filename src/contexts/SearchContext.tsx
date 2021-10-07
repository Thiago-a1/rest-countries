import { createContext, useState, useEffect, ReactNode } from "react";

import api from '../services/api';

interface Currencie {
	name: string
}

interface Language {
	name: string
}

interface Country {
	alpha3Code: string;
	flag: string;
	name: string;
	nativeName: string;
	population: number;
	region: string;
	subregion: string;
	capital: string;
	topLevelDomain: string[];
	currencies: Currencie[];
	languages: Language[];
	borders: string[];
}

interface SearchProviderProps {
	children: ReactNode;
}

interface SearchContextData {
	data: Country[];
	exibition: Country[];
	details: Country;
	inputSearch: (input: string) => void;
	selectSearch: (option: string | undefined) => void;
	countryDetails: (code: string) => void;
	getNameByCode: (code: string) => string | undefined;
}

export const SearchContext = createContext<SearchContextData>(
	{} as SearchContextData
)

export const SearchProvider = ({children}: SearchProviderProps) => {
	const [data, setData] = useState<Country[]>([] as Country[]);
	const [exibition, setExibition] = useState<Country[]>([] as Country[]);
	const [details, setDetails] = useState<Country>({} as Country);

	useEffect(() => {
		async function getData() {
				try {
					let response = await api.get(`all`);
					let { data } = response;

					setData(data);
				} catch (err) {
					alert('not found !');
				}
			}

		getData();
	}, []);

	useEffect(() => {
		setExibition(data);
	},[data]);

	function inputSearch(input: string) {
		const country = data.find(({ name }) => 
			name.toLocaleLowerCase() === input.toLocaleLowerCase());

		if(!country) {
			return
		}

		setExibition([country]);
	}

	function selectSearch(option: string | undefined) {
		if (!option) {
			setExibition(data);
		} else {
			const list = data.filter(data => data.region === option);

			setExibition([...list]);
		}
	}

	function countryDetails (code: string) {
		const country = data.find((country) => country.alpha3Code === code);

		if (country) {
			setDetails(country);
		}
	}

	function getNameByCode(code: string) {
		const country = data.find((country) => country.alpha3Code === code);

		if(!country) {
			return
		}

		return country.name;
	}

	return (
		<SearchContext.Provider 
			value={{
				data,
				exibition,
				details,
				inputSearch,
				selectSearch,
				countryDetails,
				getNameByCode
			}}
		>
			{children}
		</SearchContext.Provider>
	)
}