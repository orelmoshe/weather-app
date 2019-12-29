import React, { useState } from 'react';
import { Container, RightContainer, Icon, ButtonFavorites, Text } from './HeaderResult.styles';
import DetailCity from './DetailCity/DetailCity';
import Images from 'assets/images/images';
import { pageHeaderResultText } from 'consts/text.const';
import { IAppState } from 'redux/state/index';
import { connect } from 'react-redux';
import { setMyFavorites } from 'redux/actions/myFavorites.actions';
import _ from 'lodash';
interface HeaderResultProps {
	nameCity?: string;
	keyCity?: string;
	temperature?: string;
	iconWeather?: string;
	myFavoriteCitiesRedux: {
		LocalizedName: string;
		KeyCity: string;
		temperature: string;
		iconWeather: string;
	}[];
	setMyFavoritesCitiesRedux: (
		payload: {
			LocalizedName: string;
			KeyCity: string;
			temperature: string;
			iconWeather: string;
		}[]
	) => void;
}

const HeaderResult = ({
	nameCity,
	keyCity,
	temperature,
	iconWeather,
	myFavoriteCitiesRedux,
	setMyFavoritesCitiesRedux
}: HeaderResultProps) => {
	const [imageState, setImageState] = useState(false);
	const choosePicture = () => {
		if (myFavoriteCitiesRedux && !ifExists(nameCity)) return Images.Love_Heart;
		if (imageState) {
			return Images.Love_Heart;
		}
		return Images.Love_Heart_hollow;
	};
	const addLocationFavorite = () => {
		setImageState(!imageState);
		if (!imageState) {
			addToFavorites(nameCity, keyCity);
		} else {
			removeFromFavorites(nameCity, keyCity);
		}
	};

	const addToFavorites = (name, key) => {
		const listFavoriteNew = myFavoriteCitiesRedux ? [...myFavoriteCitiesRedux] : [];
		if (ifExists(name)) {
			listFavoriteNew.push({
				LocalizedName: name,
				KeyCity: key,
				temperature: temperature,
				iconWeather: iconWeather
			});
			setMyFavoritesCitiesRedux(listFavoriteNew);
		}
	};

	const removeFromFavorites = (name, key) => {
		const listFavoritesCity = myFavoriteCitiesRedux ? [...myFavoriteCitiesRedux] : [];
		_.remove(listFavoritesCity, item => {
			return item.LocalizedName === name && item.KeyCity === key;
		});
		setMyFavoritesCitiesRedux(listFavoritesCity);
	};

	const ifExists = name => {
		return !_.some(myFavoriteCitiesRedux, item => item.LocalizedName === name);
	};
	return (
		<Container>
			<DetailCity nameCity={nameCity} temperature={temperature} iconWeather={iconWeather} />
			<RightContainer>
				<Icon src={choosePicture()} />
				<ButtonFavorites onClick={addLocationFavorite}>
					<Text>{pageHeaderResultText.ADD_TO_FAVORITES}</Text>
				</ButtonFavorites>
			</RightContainer>
		</Container>
	);
};

const mapStateToProps = (state: IAppState) => {
	return {
		myFavoriteCitiesRedux: state.favorite.favoriteCities
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		setMyFavoritesCitiesRedux: (
			payload: {
				LocalizedName: string;
				KeyCity: string;
				temperature: string;
				iconWeather: string;
			}[]
		) => setMyFavorites(dispatch, payload)
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderResult);
