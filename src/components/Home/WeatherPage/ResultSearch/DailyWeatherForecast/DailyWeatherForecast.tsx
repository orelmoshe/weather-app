import * as React from 'react';
import { Container} from './DailyWeatherForecast.styles';
import Day from './Day/Day';
import _ from 'lodash';
import {getImgByWeather}  from '../../../../../consts/util.const';
interface DailyWeatherForecastProps {
	listWeatherDays: {temperature :string ,iconWeather:string }[];
}

const DailyWeatherForecast = ({listWeatherDays }: DailyWeatherForecastProps) => {
	const arrayDays = ['Sun' , 'Mon', 'Tue' , 'Wed' , 'Thu'];
	return (
		<Container>
           {arrayDays &&
               _.map(arrayDays , (nameDay , index)=>{
				return <Day key={`Day_${index}`} nameDay= {nameDay} degrees={'31'}  /> //iconWeather = {getImgByWeather(listWeatherDays[index].iconWeather)}
			   })
		   }
		</Container>
	);
};

export default DailyWeatherForecast;