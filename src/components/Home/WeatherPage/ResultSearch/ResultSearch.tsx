import React, { useEffect, useState } from 'react';
import { Container, TitleMiddle } from './ResultSearch.styles';
import HeaderResult from './HeaderResult/HeaderResult';
import DailyWeatherForecast from './DailyWeatherForecast/DailyWeatherForecast';
import { pageResultSearchText } from 'consts/text.const';
import { IAppState } from 'redux/state/index';
import { connect } from 'react-redux';
import { getImgByWeather } from 'services/util.service';
import DataService from 'services/data.service';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ResultSearchProps {
	currentCity: { LocalizedName: string; KeyCity: string };
}

const ResultSearch = ({ currentCity }: ResultSearchProps) => {
	const [fullInfo, setFullInfo] = useState({currentCityWeather: { temperature: '', descriptionWeather: '' },listWeatherDays: []});

	useEffect(() => {
		getTemperatureCity(currentCity.KeyCity).then(res => {
			setFullInfo(res);
		});
	}, [currentCity]);

	const getTemperatureCity = async (KeyCity: string) => {
		try {
			const ds = new DataService();
			const data = await ds.getTemperatureCurrentCity(KeyCity);
			const temperature = String(data[0].Temperature.Metric.Value);
			const descriptionWeather = String(data[0].WeatherText);
	
			const dataDays = await ds.getDailyForecasts(KeyCity);
			const listWeatherDays = dataDays.DailyForecasts.map(item => {
				return {
					temperature: String(Math.round(((Number(item.Temperature.Minimum.Value) - 32) * 5) / 9)),
					descriptionWeather: item.Day.IconPhrase
				};
			});
	
			return {
				currentCityWeather: { temperature: temperature, descriptionWeather: descriptionWeather },
				listWeatherDays: listWeatherDays
			};

		} catch(err) {
				toast.configure()
				toast.error('api key has expired ,wait 24 hours', { position: toast.POSITION.TOP_CENTER });
				console.error('Error',err);
				return {currentCityWeather: { temperature: '', descriptionWeather: '' },listWeatherDays: []};
		}
	};
	
	return (
		<Container>
			<HeaderResult
				nameCity={currentCity.LocalizedName || ''}
				keyCity={currentCity.KeyCity || ''}
				temperature={fullInfo.currentCityWeather.temperature || ''}
				descriptionWeather={fullInfo.currentCityWeather.descriptionWeather || ''}
				iconWeather={getImgByWeather(fullInfo.currentCityWeather.descriptionWeather)|| ''}
			/>
			<TitleMiddle>{pageResultSearchText.SCATTERED_CLOUDS}</TitleMiddle>
			<DailyWeatherForecast listWeatherDays={fullInfo.listWeatherDays || null} />
		</Container>
	);
};

const mapStateToProps = (state: IAppState) => {
	return {
		currentCity: state.currentCity.currentCity
	};
};

export default connect(mapStateToProps,undefined)(ResultSearch);
