import * as React from 'react';
import { Container} from './DailyWeatherForecast.styles';
import Day from './Day/Day';
import _ from 'lodash';
import {getImgByWeather}  from '../../../../../services/util.service';
interface DailyWeatherForecastProps {
	listWeatherDays: {temperature :string ,iconWeather:string }[];
}

const DailyWeatherForecast = ({listWeatherDays }: DailyWeatherForecastProps) => {
	const arrayDays = ['Sun' , 'Mon', 'Tue' , 'Wed' , 'Thu'];
	return (
		<Container>
           {listWeatherDays &&
               listWeatherDays.map((item , index)=>{
				return <Day key={`Day_${index}`} nameDay= {arrayDays[index]} degrees={item.temperature} iconWeather = {getImgByWeather(listWeatherDays[index].iconWeather)} />
			   })
		   }
		</Container>
	);
};

export default DailyWeatherForecast;