import * as T from '../types';

export const setCurrentPage = (dispatch: any, payload: string) => {
	dispatch({
		type: T.SET_APPLICATION_PAGE,
		payload
	});
};
