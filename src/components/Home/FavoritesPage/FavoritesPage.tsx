import * as React from 'react';
import { Container,Item } from './FavoritesPage.styles';
import { IAppState } from '../../../redux/state/index';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../../redux/actions/route.action';
interface FavoritesPageProps {
	// currentPageRedux: string;
	// setCurrentPageRedux: (payload: string) => void;
}

const FavoritesPage = ({}: FavoritesPageProps) => {


	return (
		<Container>
           <Item></Item>
           <Item></Item>
           <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
		</Container>
	);
};
const mapStateToProps = (state: IAppState) => {
	return {
		// currentPageRedux: state.currentPage.currentPage
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		// setCurrentPageRedux: (payload: string) => setCurrentPage(dispatch, payload)
	};
};
export default connect(mapStateToProps, mapDispatchToProps)( FavoritesPage);