import * as React from 'react';
import { Container } from './Home.styles';
import Header from './Header/Header';
import WeatherPage from './WeatherPage/WeatherPage';
import { IAppState } from 'redux/state/index';
import { connect } from 'react-redux';
import { setCurrentPage } from 'redux/actions/route.action';
import FavoritesPage from './FavoritesPage/FavoritesPage';
interface HomeProps {
	currentPageRedux: string;
	setCurrentPageRedux: (payload: string) => void;
}

const Home = ({currentPageRedux,setCurrentPageRedux}: HomeProps) => {


	return (
		<Container>
			<Header currentPage={currentPageRedux} setCurrentPage={setCurrentPageRedux} />
			{ currentPageRedux === 'Home'&&
		  	   <WeatherPage></WeatherPage>
			}
			{ currentPageRedux === 'Favorites' &&
		  	   <FavoritesPage />
			}
		</Container>
	);
};
const mapStateToProps = (state: IAppState) => {
	return {
		currentPageRedux: state.currentPage.currentPage
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		setCurrentPageRedux: (payload: string) => setCurrentPage(dispatch, payload)
	};
};
export default connect(mapStateToProps, mapDispatchToProps)( Home);
