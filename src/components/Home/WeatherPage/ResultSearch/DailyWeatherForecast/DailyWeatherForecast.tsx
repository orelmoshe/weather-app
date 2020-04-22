import * as React from 'react';
import { Container } from './DailyWeatherForecast.styles';
import InformationWeatherItem from 'components/Widgets/InformationWeatherItem/InformationWeatherItem';
import { getImgByWeather } from 'services/util.service';

interface DailyWeatherForecastProps {
	listWeatherDays: { temperature: string; descriptionWeather: string }[];
}

const DailyWeatherForecast = ({ listWeatherDays }: DailyWeatherForecastProps) => {
	const arrayDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
	return (
		<Container>
			{listWeatherDays &&
				listWeatherDays.map((item, index) => (
					<InformationWeatherItem
						key={`Day_${index}`}
						name={arrayDays[index]}
						temperature={item.temperature}
						iconWeather={getImgByWeather(listWeatherDays[index].descriptionWeather)}
						width="150px"
						height="170px"
					/>
				))}
		</Container>
	);
};

export default DailyWeatherForecast;
