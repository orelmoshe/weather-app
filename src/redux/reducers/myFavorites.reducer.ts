import * as T from '../types';
import favoriteCitiesInitialState, { MyFavoritesInterface } from '../../redux/state/myFavorites.state';

const MyFavoritesReducer = (state: MyFavoritesInterface = favoriteCitiesInitialState, action: any): MyFavoritesInterface => {
	if (action.type === T.SET_FAVORITES) {
		return {
			...state,
			favoriteCities: action.payload,
		};
	}
	return state;
};
export default MyFavoritesReducer;
