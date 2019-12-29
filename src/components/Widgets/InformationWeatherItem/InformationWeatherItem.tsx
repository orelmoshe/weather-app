import * as React from 'react';
import { Container, Title, TextWeather, Icon, Degrees } from './InformationWeatherItem.styles';

interface DayProps {
	name: string;
	degrees: string;
	textWeather?: string;
	iconWeather?: string;
	width: string;
	height: string;
	checked?: boolean;
	KeyCity?: string;
	clickedItemFavorite?: (name: string, KeyCity: string) => void;
}

const InformationWeatherItem = ({
	name,
	degrees,
	textWeather,
	iconWeather,
	width,
	height,
	checked,
	KeyCity,
	clickedItemFavorite
}: DayProps) => {
	return (
		<Container
			width={width}
			height={height}
			checked={checked}
			onClick={() => checked && clickedItemFavorite(name, KeyCity)}
		>
			<Title>{name}</Title>
			{iconWeather && <Icon src={`${iconWeather}`} />}
			{textWeather && <TextWeather>{textWeather}</TextWeather>}

			<Degrees>{degrees}°C</Degrees>
		</Container>
	);
};

export default InformationWeatherItem;
