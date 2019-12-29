import React, { useState, useEffect } from 'react';
import { Container } from './WeatherPage.styles';
import Images from 'assets/images/images';
import ResultSearch from './ResultSearch/ResultSearch';
import SearchWrapper from '../../Widgets/Search/SearchWrapper';
import { IAppState } from 'redux/state/index';
import { connect } from 'react-redux';
import { setCurrentConditions } from 'redux/actions/currentConditions.actions';
interface WeatherPageProps {
	currentCity: { LocalizedName: string; KeyCity: string };
	setCurrentConditions: (payload: { LocalizedName: string; KeyCity: string }) => void;
}

const WeatherPage = ({ currentCity, setCurrentConditions }: WeatherPageProps) => {
	const [selectedSearchItem, setSelectedSearchItem] = useState(undefined);
	const [selectedCity, setSelectedCity] = useState(currentCity);
	useEffect(() => {
		setCurrentConditions(selectedCity);
	}, [selectedCity]);

	return (
		<Container>
			<SearchWrapper
				textPlaceholder="Enter City"
				image={Images.search}
				rightImage={Images.clear}
				setSelectedItem={setSelectedSearchItem}
				setSelectedCity={setSelectedCity}
			/>
			<ResultSearch />
		</Container>
	);
};

const mapStateToProps = (state: IAppState) => {
	return {
		currentCity: state.currentCity.currentCity
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		setCurrentConditions: (payload: { LocalizedName: string; KeyCity: string }) =>
			setCurrentConditions(dispatch, payload)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);
