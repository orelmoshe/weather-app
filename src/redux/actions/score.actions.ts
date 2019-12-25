import * as T from '../types';

export const setScore = (dispatch: any, payload: number) => {
	dispatch({
		type: T.SET_SCORE,
		payload
	});
};
