import * as React from 'react';
import { Container, Icon, RightContainer, NameCity, Degrees } from './DetailCity.styles';

interface DetailCityProps {
	nameCity?: string;
	degrees?: string;
	iconWeather?: string;
}

const DetailCity = ({ nameCity, degrees, iconWeather }: DetailCityProps) => {
	return (
		<Container>
			<Icon src={iconWeather} />
			<RightContainer>
				<NameCity>{nameCity}</NameCity>
				<Degrees>{degrees}°C</Degrees>
			</RightContainer>
		</Container>
	);
};

export default DetailCity;
