import React, { useEffect } from 'react';
import { Container, Text } from './FavoritesPage.styles';
import InformationWeatherItem from '../../Widgets/InformationWeatherItem/InformationWeatherItem';
import { IAppState } from 'redux/state/index';
import { connect } from 'react-redux';
import { setCurrentPage } from 'redux/actions/route.action';
import { setCurrentConditions } from 'redux/actions/currentConditions.actions';
import { setMyFavorites } from 'redux/actions/myFavorites.actions';
import DataService from 'services/data.service';
import { getImgByWeather } from 'services/util.service';

interface FavoritesPageProps {
	favoriteRedux: { LocalizedName: string; KeyCity: string; temperature: string; descriptionWeather: string; }[];
	setCurrentConditions: (payload: { LocalizedName: string; KeyCity: string }) => void;
	setCurrentPageRedux: (payload: string) => void;
	setCurrentFavorites: (payload: { LocalizedName: string; KeyCity: string; temperature: string; descriptionWeather: string; }[]) => void;
}

const FavoritesPage = ({favoriteRedux,setCurrentConditions,setCurrentPageRedux,setCurrentFavorites}: FavoritesPageProps) => {

	useEffect(() => {
		favoriteRedux &&
			getFavoriteCitiesDetails(favoriteRedux).then(res => {
				setCurrentFavorites(res);
			});
	}, [favoriteRedux, setCurrentFavorites]);

	const getFavoriteCitiesDetails = async (listCities: any[]): Promise<any> => {
		try {
			const ds = new DataService();
			const promiseArr = listCities.map(item => ds.getTemperatureCurrentCity(item.KeyCity));
			return Promise.all(promiseArr).then((resArr: any[]) => {
				return resArr.map((city, index) => {
					const temperature = String(city[0].Temperature.Metric.Value);
					const descriptionWeather = String(city[0].WeatherText);
					return {
						LocalizedName: `${listCities[index].LocalizedName}`,
						KeyCity: listCities[index].KeyCity,
						temperature: temperature,
						descriptionWeather: descriptionWeather
					};
				});
			});
		} catch (error) {
			console.error('Error', error);
		}
	};

	const clickedItemFavorite = (name, keyCity) => {
		setCurrentConditions({ LocalizedName: name, KeyCity: keyCity });
		setCurrentPageRedux('Home');
	};

	const isEmpty = (arr: any) => {
		return arr.length === 0;
	};

	return (
		<Container>
			{favoriteRedux.map(item => (
				<InformationWeatherItem
					key={`FULL_INFO_${item.KeyCity}`}
					name={item.LocalizedName}
					KeyCity={item.KeyCity}
					temperature={item.temperature}
					textWeather={item.descriptionWeather}
					width="190px"
					height="250px"
					checked={true}
					clickedItemFavorite={clickedItemFavorite}
					iconWeather={getImgByWeather(item.descriptionWeather)}
				/>
			))}
			{isEmpty(favoriteRedux) && <Text>There are no saved Favorites</Text>}
		</Container>
	);
};

const mapStateToProps = (state: IAppState) => {
	return {
		favoriteRedux: state.favorite.favoriteCities
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		setCurrentFavorites: (payload: { LocalizedName: string; KeyCity: string; temperature: string; descriptionWeather: string; }[]) => setMyFavorites(dispatch, payload),
		setCurrentConditions: (payload: { LocalizedName: string; KeyCity: string }) => setCurrentConditions(dispatch, payload),
		setCurrentPageRedux: (payload: string) => setCurrentPage(dispatch, payload)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
