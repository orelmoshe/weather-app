import * as T from '../types';

export const setQuestionsPage = (dispatch: any, payload: string) => {
	dispatch({
		type: T.SET_QUESTION_PAGE,
		payload
	});
};
