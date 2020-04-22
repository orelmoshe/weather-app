import * as React from 'react';
import { Container, Title, TextWeather, Icon, Temperature } from './InformationWeatherItem.styles';

interface DayProps {
	name: string;
	temperature: string;
	textWeather?: string;
	iconWeather?: string;
	width: string;
	height: string;
	checked?: boolean;
	KeyCity?: string;
	clickedItemFavorite?: (name: string, KeyCity: string) => void;
}

const InformationWeatherItem = ({ name, temperature, textWeather, iconWeather, width, height, checked, KeyCity, clickedItemFavorite }: DayProps) => {
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

			<Temperature>{temperature}°C</Temperature>
		</Container>
	);
};

export default InformationWeatherItem;
