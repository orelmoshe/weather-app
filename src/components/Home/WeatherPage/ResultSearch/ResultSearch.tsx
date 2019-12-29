import React, {useEffect, useState } from "react";
import { Container,TitleMiddle} from './ResultSearch.styles';
import HeaderResult from './HeaderResult/HeaderResult';
import DailyWeatherForecast from './DailyWeatherForecast/DailyWeatherForecast';
import {pageResultSearchText} from 'consts/text.const';
import { IAppState } from 'redux/state/index';
import { connect } from 'react-redux';
import {getImgByWeather,getTemperatureCity} from 'services/util.service';
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
	
    return (
		<Container>
			<HeaderResult 
				nameCity={currentCity.LocalizedName} 
				keyCity ={currentCity.KeyCity} 
				degrees={fullInfo.currentCityWeather.temperature}
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