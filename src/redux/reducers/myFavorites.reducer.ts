import * as T from '../types';
import initialMyFavoritesState, { MyFavoritesInterface } from '../../redux/state/myFavorites.state';

const MyFavoritesReducer = (state: MyFavoritesInterface = initialMyFavoritesState, action: any): MyFavoritesInterface => {
	if (action.type === T.SET_APPLICATION_PAGE) {
		return {
			...state,
			myFavoritesCitys: action.payload
		};
	}
	return state;
};
export default MyFavoritesReducer;