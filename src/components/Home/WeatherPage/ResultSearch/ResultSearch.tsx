import React, {useEffect } from "react";
import { Container,TitleMiddle} from './ResultSearch.styles';
import HeaderResult from './HeaderResult/HeaderResult';
import DailyWeatherForecast from './DailyWeatherForecast/DailyWeatherForecast';
import {pageResultSearchText} from '../../../../consts/text.const';
import { IAppState } from '../../../../redux/state/index';
import { connect } from 'react-redux';
import DataService from "services/data.service";
interface ResultSearchProps {
	currentCity:{LocalizedName:string,KeyCity:string }
}

const ResultSearch = ({ currentCity}: ResultSearchProps) => {
	const getTemperaturCity = async (KeyCity:string)=>{
		const ds = new DataService();
		try {
			const data = await ds.getTemperaturCurrentCity(KeyCity);
			console.log(data)
			const temperature = String(data[0].Temperature.Metric.Value);
            return temperature;
		} catch(e){
            console.log('Error from ResultSearch component , failed get get Temperatur current city , Error:', e);
		}
	}
	return (
		<Container>
			<HeaderResult nameCity={currentCity.LocalizedName} degrees={getTemperaturCity(currentCity.KeyCity)}/>
		    <TitleMiddle>{pageResultSearchText.SCATTERED_CLOUDS}</TitleMiddle>
			<DailyWeatherForecast/>
		</Container>
	);
};

const mapStateToProps = (state: IAppState) => {
	return {
		currentCity: state.currentCity.currentCity
	};
};


export default  connect(mapStateToProps)(ResultSearch);