import * as T from '../types';

export const setAutocompleteSearch = (dispatch: any, payload: string) => {
	dispatch({
		type: T.SET_AUTOCOMPLETE_SEARCH,
		payload
	});
};
