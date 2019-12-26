import * as React from 'react';
import { Container,TitleMiddle} from './ResultSearch.styles';
import HeaderResult from './HeaderResult/HeaderResult';
import DailyWeatherForecast from './DailyWeatherForecast/DailyWeatherForecast';
import {pageResultSearchText} from '../../../../consts/text.const';
interface ResultSearchProps {

}

const ResultSearch = ({ }: ResultSearchProps) => {
	return (
		<Container>
            <HeaderResult/>
		    <TitleMiddle>{pageResultSearchText.SCATTERED_CLOUDS}</TitleMiddle>
			<DailyWeatherForecast/>
		</Container>
	);
};

export default ResultSearch;