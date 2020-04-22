import { combineReducers } from 'redux';
import routeReducer from './route.reducer';
import MyFavoritesReducer from './myFavorites.reducer';
import CurrentConditionsReducer from './currentConditions.reducer';

export default combineReducers({
	currentPage: routeReducer,
	favorite: MyFavoritesReducer,
	currentCity: CurrentConditionsReducer
});
