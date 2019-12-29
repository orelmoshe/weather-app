import * as T from '../types';

export const setMyFavorites = (dispatch: any, payload:{
	LocalizedName: string;
	KeyCity: string;
	temperature:string,
	iconWeather:string
  }[]) => {
	dispatch({
		type: T.SET_FAVORITES,
		payload
	});
};
