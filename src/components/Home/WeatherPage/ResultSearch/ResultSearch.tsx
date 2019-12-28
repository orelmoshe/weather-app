import React, {useEffect, useState } from "react";
import { Container,TitleMiddle} from './ResultSearch.styles';
import HeaderResult from './HeaderResult/HeaderResult';
import DailyWeatherForecast from './DailyWeatherForecast/DailyWeatherForecast';
import {pageResultSearchText} from '../../../../consts/text.const';
import { IAppState } from '../../../../redux/state/index';
import { connect } from 'react-redux';
import DataService from "services/data.service";
import {getImgByWeather} from 'consts/util.const';
interface ResultSearchProps {
	currentCity:{LocalizedName:string,KeyCity:string }
}

const ResultSearch = ({ currentCity}: ResultSearchProps) => {
	const [situationState, setSituationeState] = useState({temperature:'' ,iconWeather:'' });
	const [listWeatherDaysState, setListWeatherDaysState] = useState([]);
	const getTemperaturCity = async (KeyCity:string) =>{
		const ds = new DataService();
		try { 
			const data = await ds.getTemperaturCurrentCity(KeyCity);
			const temperature = String(data[0].Temperature.Metric.Value);
			const iconWeather = String(data[0].WeatherText);
			setSituationeState({temperature:temperature,iconWeather:iconWeather});
		} catch(e){
            console.log('Error from ResultSearch component , failed get get Temperatur current city , Error:', e);
		}
	}
	const getDaysWeather = async(KeyCity:string)=>{
		const ds = new DataService();
		try {
			const data = await ds.getDailyForecasts(KeyCity);
			const listWeatherDays = Array();
			data && data.DailyForecasts.map((item)=>{
				  listWeatherDays.push({temperature: String(Math.round((Number(item.Temperature.Minimum.Value) - 32) * 5 / 9)) ,iconWeather:item.Day.IconPhrase });
					});
		   setListWeatherDaysState(listWeatherDays)
			//setListWeatherDaysState([...listWeatherDaysState ,{temperature: String(Math.round((Number(item.Temperature.Minimum.Value) - 32) * 5 / 9)) ,iconWeather:item.Day.IconPhrase }])
			console.log(listWeatherDaysState)
		} catch(e){
            console.log('Error from ResultSearch component , failed get weather 5 days data , Error:', e);
		}
    }

	useEffect(()=>{
		getTemperaturCity(currentCity.KeyCity);
		getDaysWeather(currentCity.KeyCity);
		setListWeatherDaysState(listWeatherDaysState);
	},[currentCity]);
	
    return (
		<Container>
			<HeaderResult nameCity={currentCity.LocalizedName} degrees={situationState.temperature} iconWeather={getImgByWeather(situationState.iconWeather)}/>
		    <TitleMiddle>{pageResultSearchText.SCATTERED_CLOUDS}</TitleMiddle>
			<DailyWeatherForecast listWeatherDays={listWeatherDaysState}/>
		</Container>
	);
};

const mapStateToProps = (state: IAppState) => {
	return {
		currentCity: state.currentCity.currentCity
	};
};


export default  connect(mapStateToProps)(ResultSearch);