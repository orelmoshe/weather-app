import * as T from '../types';

export const setMyFavorites = ( dispatch: any, payload: {	LocalizedName: string; KeyCity: string; temperature: string; descriptionWeather: string; }[] ) => {
	dispatch({
		type: T.SET_FAVORITES,
		payload
	});
};
