import * as React from 'react';
import { Container,SearchInputContainer,SearchInput,IconSearch } from './WeatherPage.styles';
import images from '../../../assets/images/images';
import {pageWeatherText} from '../../../consts/text.const';
import ResultSearch from './ResultSearch/ResultSearch';

interface WeatherPageProps {

}

const WeatherPage = ({ }: WeatherPageProps) => {


	return (
		<Container>
           <SearchInputContainer>
               <IconSearch src={images.search}></IconSearch>
               <SearchInput placeholder={pageWeatherText.ENTER_ITY}/>
           </SearchInputContainer>

           <ResultSearch/>
		</Container>
	);
};

export default WeatherPage;