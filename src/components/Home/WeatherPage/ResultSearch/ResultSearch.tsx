import React, {useEffect } from "react";
import { Container,TitleMiddle} from './ResultSearch.styles';
import HeaderResult from './HeaderResult/HeaderResult';
import DailyWeatherForecast from './DailyWeatherForecast/DailyWeatherForecast';
import {pageResultSearchText} from '../../../../consts/text.const';
import { IAppState } from '../../../../redux/state/index';
import { connect } from 'react-redux';
interface ResultSearchProps {
	currentCity:{LocalizedName:string,KeyCity:string }
}

const ResultSearch = ({ }: ResultSearchProps) => {
	return (
		<Container>
            <HeaderResult />
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