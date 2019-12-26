import { combineReducers } from 'redux';
import routeReducer from './route.reducer';
import MyFavoritesReducer from './myFavorites.reducer';
import DailyForcecastsReducer from './dailyForcecasts.reducer';
import CurrentConditionsReducer from './currentConditions.reducer';
import AutocompleteSearchReducer from './autocompleteSearch.reducer';

export default combineReducers({
	currentPage: routeReducer,
	myFavoritesCitys:MyFavoritesReducer,
	dailyForcecasts:DailyForcecastsReducer,
	currentCity:CurrentConditionsReducer,
	citys:AutocompleteSearchReducer,
});
