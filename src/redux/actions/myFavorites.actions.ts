import * as T from '../types';

export const setMyFavorites = (dispatch: any, payload: string[]) => {
	dispatch({
		type: T.SET_MY_FAVOTITES,
		payload
	});
};
