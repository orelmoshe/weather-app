import * as React from 'react';
import { Container } from './Home.styles';
import Header from './Header/Header';
import WeatherPage from './WeatherPage/WeatherPage';

interface HomeProps {

}

const Home = ({ }: HomeProps) => {


	return (
		<Container>
			<Header />
			<WeatherPage></WeatherPage>
		</Container>
	);
};

export default Home;
