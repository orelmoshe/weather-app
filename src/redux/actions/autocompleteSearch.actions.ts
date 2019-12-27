import * as T from '../types';
import DataService from 'services/data.service';

export const setAutocompleteSearch = (dispatch: any, payload: string[]) => {
	dispatch({
		type: T.SET_AUTOCOMPLETE_SEARCH,
		payload
	});
};
