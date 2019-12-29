import * as React from 'react';
import { Container, Icon, RightContainer, NameCity, Degrees } from './DetailCity.styles';

interface DetailCityProps {
	nameCity: string;
	temperature: string;
	iconWeather: string;
}

const DetailCity = ({ nameCity, temperature, iconWeather }: DetailCityProps) => {
	return (
		<Container>
			<Icon src={iconWeather} />
			<RightContainer>
				<NameCity>{nameCity}</NameCity>
				<Degrees>{temperature}°C</Degrees>
			</RightContainer>
		</Container>
	);
};

export default DetailCity;
