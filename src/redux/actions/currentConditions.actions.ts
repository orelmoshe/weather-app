import * as T from '../types';

export const setCurrentConditions = (dispatch: any, payload: string) => {
	dispatch({
		type: T.SET_CURRENT_CONDITIONS,
		payload
	});
};
