import * as React from 'react';
import { Container} from './DailyWeatherForecast.styles';
import Day from './Day/Day';
import _ from 'lodash';
interface DailyWeatherForecastProps {

}

const DailyWeatherForecast = ({ }: DailyWeatherForecastProps) => {
	const arrayDays = ['Sun' , 'Mon', 'Tue' , 'Wed' , 'Thu'];
	return (
		<Container>
           {arrayDays &&
               _.map(arrayDays , (nameDay , index)=>{
				return <Day key={`Day_${index}`} nameDay= {nameDay} degrees='31'/>  
			   })
		   }
		</Container>
	);
};

export default DailyWeatherForecast;