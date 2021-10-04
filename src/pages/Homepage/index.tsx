import React from "react";

import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Card } from "../../components/Card";

import { Dashboard, Container } from "./styles";

export const Homepage: React.FC = () => {
	return (
		<Dashboard>
			<Container>
				<Input />

				<Select />

				<Card />
			</Container>
		</Dashboard>
	)
}