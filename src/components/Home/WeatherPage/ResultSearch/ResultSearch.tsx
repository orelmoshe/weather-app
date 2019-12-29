import React, {useEffect, useState } from "react";
import { Container,TitleMiddle} from './ResultSearch.styles';
import HeaderResult from './HeaderResult/HeaderResult';
import DailyWeatherForecast from './DailyWeatherForecast/DailyWeatherForecast';
import {pageResultSearchText} from '../../../../consts/text.const';
import { IAppState } from '../../../../redux/state/index';
import { connect } from 'react-redux';
import DataService from "services/data.service";
import {getImgByWeather,getTemperaturCity} from 'services/util.service';
interface ResultSearchProps {
	currentCity:{LocalizedName:string,KeyCity:string }
}

const ResultSearch = ({ currentCity}: ResultSearchProps) => {
	const [situationState, setSituationeState] = useState({currentCityWeather:{temperature:'' ,iconWeather:'' },listWeatherDays:[]});
	useEffect(()=>{
		getTemperaturCity(currentCity.KeyCity).then(res => {
		  setSituationeState(res);
		});	
	},[currentCity]);
	
    return (
		<Container>
			<HeaderResult 
				nameCity={currentCity.LocalizedName} 
				keyCity ={currentCity.KeyCity} 
				degrees={situationState.currentCityWeather.temperature}
				iconWeather={getImgByWeather(situationState.currentCityWeather.iconWeather)}
			 />
		    <TitleMiddle>{pageResultSearchText.SCATTERED_CLOUDS}</TitleMiddle>
			<DailyWeatherForecast listWeatherDays={situationState.listWeatherDays}/>
		</Container>
	);
};

const mapStateToProps = (state: IAppState) => {
	return {
		currentCity: state.currentCity.currentCity
	};
};


export default  connect(mapStateToProps)(ResultSearch);