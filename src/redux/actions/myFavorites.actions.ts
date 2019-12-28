import * as T from '../types';

export const setMyFavorites = (dispatch: any, payload: {LocalizedName:string,KeyCity:string}[]) => {
	dispatch({
		type: T.SET_MY_FAVOTITES,
		payload
	});
};
