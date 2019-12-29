import React, {useEffect, useState } from "react";
import { Container,TitleMiddle} from './ResultSearch.styles';
import HeaderResult from './HeaderResult/HeaderResult';
import DailyWeatherForecast from './DailyWeatherForecast/DailyWeatherForecast';
import {pageResultSearchText} from 'consts/text.const';
import { IAppState } from 'redux/state/index';
import { connect } from 'react-redux';
import {getImgByWeather} from 'services/util.service';
import DataService from "services/data.service";
interface ResultSearchProps {
	currentCity:{LocalizedName:string,KeyCity:string }
}

const ResultSearch = ({ currentCity}: ResultSearchProps) => {
	const [fullInfo, setFullInfo] = useState({currentCityWeather:{temperature:'' ,iconWeather:'' },listWeatherDays:[]});
	useEffect(()=>{
		getTemperatureCity(currentCity.KeyCity).then(res => {
			setFullInfo(res);
		});	
	},[currentCity]);
	
	const getTemperatureCity = async (KeyCity: string) => {
		const ds = new DataService();
		const data = await ds.getTemperatureCurrentCity(KeyCity);
		const temperature = String(data[0].Temperature.Metric.Value);
		const iconWeather = String(data[0].WeatherText);

		const dataDays = await ds.getDailyForecasts(KeyCity);
		const listWeatherDays = dataDays.DailyForecasts.map(item => {
			return {
				temperature: String(Math.round(((Number(item.Temperature.Minimum.Value) - 32) * 5) / 9)),
				iconWeather: item.Day.IconPhrase
			};
		});
	
		return { currentCityWeather: {temperature: temperature,iconWeather: iconWeather},
		         listWeatherDays: listWeatherDays
	         };
	};
    return (
		<Container>
			<HeaderResult 
				nameCity={currentCity.LocalizedName} 
				keyCity ={currentCity.KeyCity} 
				temperature={fullInfo.currentCityWeather.temperature}
				iconWeather={getImgByWeather(fullInfo.currentCityWeather.iconWeather)}
			 />
		    <TitleMiddle>{pageResultSearchText.SCATTERED_CLOUDS}</TitleMiddle>
			<DailyWeatherForecast listWeatherDays={fullInfo.listWeatherDays}/>
		</Container>
	);
};

const mapStateToProps = (state: IAppState) => {
	return {
		currentCity: state.currentCity.currentCity
	};
};


export default  connect(mapStateToProps)(ResultSearch);