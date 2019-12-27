import React, {useEffect, useState } from "react";
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
    const [temperatueState, setTemperatureState] = useState();
	const getTemperaturCity = async (KeyCity:string) =>{
		const ds = new DataService();
		try {
			const data = await ds.getTemperaturCurrentCity(KeyCity);
			const temperature = String(data[0].Temperature.Metric.Value);
			setTemperatureState(temperature);
		} catch(e){
            console.log('Error from ResultSearch component , failed get get Temperatur current city , Error:', e);
		}
	}

	useEffect(()=>{getTemperaturCity(currentCity.KeyCity)},[currentCity]);
    return (
		<Container>
			<HeaderResult nameCity={currentCity.LocalizedName} degrees={temperatueState}/>
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