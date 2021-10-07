import { useContext } from "react";
import { Link } from 'react-router-dom';

import { HiArrowNarrowLeft } from 'react-icons/hi';

import { ThemeContext } from "styled-components";
import { SearchContext } from "../../contexts/SearchContext";

import { ButtonContainer } from "./styles";


interface ButtonProps {
	selectSearch: (option: string | undefined) => void | undefined;
	name?: string;
	content?: string;
	icon?: boolean;
	link: string;
}

export const Button = ({selectSearch, name, content, icon, link}: ButtonProps) => {
	const { primaryFontColor } = useContext(ThemeContext);
	const { countryDetails } = useContext(SearchContext);

	return (
		<Link to={link} style={{ textDecoration: 'none', width: '96px' }}>
			<ButtonContainer onClick={() => [countryDetails(link), selectSearch(undefined)]}>
				{icon && 
					<HiArrowNarrowLeft style={{ marginRight: '6px' }} size={18} color={primaryFontColor}/>
				}
				<span>{
					!content ? name?.substr(0, 20).split('(', 1) : content
				}</span>
			</ButtonContainer>
		</Link>
	)
}