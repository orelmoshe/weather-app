import * as React from 'react';
import { Container } from './Home.styles';
import Header from './Header/Header';


interface HomeProps {

}

const Home = ({ }: HomeProps) => {


	return (
		<Container>
			<Header />
		</Container>
	);
};

export default Home;