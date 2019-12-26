import * as T from '../types';

export const setDailyForcecasts = (dispatch: any, payload: string) => {
	dispatch({
		type: T.SET_DAILT_FORCECASTS,
		payload
	});
};
