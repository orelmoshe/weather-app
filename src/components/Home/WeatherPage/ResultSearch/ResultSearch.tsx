import React, {useEffect, useState } from "react";
import { Container,TitleMiddle} from './ResultSearch.styles';
import HeaderResult from './HeaderResult/HeaderResult';
import DailyWeatherForecast from './DailyWeatherForecast/DailyWeatherForecast';
import {pageResultSearchText} from '../../../../consts/text.const';
import { IAppState } from '../../../../redux/state/index';
import { connect } from 'react-redux';
import DataService from "services/data.service";
import {getImgByWeather} from 'services/util.service';
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
			const dataDays = await ds.getDailyForecasts(KeyCity);
			const listWeatherDays = dataDays.DailyForecasts.map((item)=>{
				return {temperature: String(Math.round((Number(item.Temperature.Minimum.Value) - 32) * 5 / 9)) ,iconWeather:item.Day.IconPhrase };
				  });
	    	setListWeatherDaysState(listWeatherDays);		
		} catch(e){
            console.log('Error from ResultSearch component , failed get get Temperatur current city , Error:', e);
		}
	}

	useEffect(()=>{
		getTemperaturCity(currentCity.KeyCity);
	},[currentCity]);
	
    return (
		<Container>
			<HeaderResult nameCity={currentCity.LocalizedName} keyCity ={currentCity.KeyCity} degrees={situationState.temperature} iconWeather={getImgByWeather(situationState.iconWeather)}/>
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