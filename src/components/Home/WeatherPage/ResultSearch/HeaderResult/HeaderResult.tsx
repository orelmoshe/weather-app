import React from 'react';
import { Container, RightContainer, Icon, ButtonFavorites, Text } from './HeaderResult.styles';
import DetailCity from './DetailCity/DetailCity';
import Images from 'assets/images/images';
import { pageHeaderResultText } from 'consts/text.const';
import { IAppState } from 'redux/state/index';
import { connect } from 'react-redux';
import { setMyFavorites } from 'redux/actions/myFavorites.actions';
import _ from 'lodash';

interface HeaderResultProps {
	nameCity: string;
	keyCity: string;
	temperature: string;
	iconWeather?: string;
	descriptionWeather?:string;
	favoriteRedux: {LocalizedName: string;KeyCity: string;temperature: string;descriptionWeather: string;}[];
	setCurrentFavorites: (payload: {LocalizedName: string;KeyCity: string;temperature: string;descriptionWeather: string;}[]) => void;
}

const HeaderResult = ({nameCity,keyCity,temperature,iconWeather,favoriteRedux,setCurrentFavorites,descriptionWeather}: HeaderResultProps) => {
	const choosePicture = () => {
		if (favoriteRedux && ifExists()) return Images.Love_Heart;
		else return Images.Love_Heart_hollow;
	};

	const addCityToFavorite = () => {
		if (!ifExists()) {
			addToFavorites();
		} else {
			removeFromFavorites();
		}
	};

	const addToFavorites = () => {
		if (!ifExists()) {
			const listFavoriteNew = favoriteRedux ? [...favoriteRedux] : [];
			listFavoriteNew.push({
				LocalizedName: nameCity,
				KeyCity: keyCity,
				temperature: temperature,
				descriptionWeather: descriptionWeather
			});
			setCurrentFavorites(listFavoriteNew);
		}
	};

	const removeFromFavorites = () => {
		const listFavorites = favoriteRedux ? [...favoriteRedux] : [];
		_.remove(listFavorites, item => item.LocalizedName === nameCity );
		setCurrentFavorites(listFavorites);
	};

	const ifExists = () => {
		return _.some(favoriteRedux, item => item.LocalizedName === nameCity);
	};

	return (
		<Container>
			<DetailCity nameCity={nameCity} temperature={temperature} iconWeather={iconWeather}/>
			<RightContainer>
				<Icon src={choosePicture()} />
				<ButtonFavorites onClick={addCityToFavorite}>
					<Text>{pageHeaderResultText.ADD_TO_FAVORITES}</Text>
				</ButtonFavorites>
			</RightContainer>
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
		setCurrentFavorites: (
			payload: {LocalizedName: string;KeyCity: string;temperature: string;descriptionWeather: string;}[]) => setMyFavorites(dispatch, payload)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderResult);
