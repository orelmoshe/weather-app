import * as T from '../types';
import initialAutocompleteSearchState, { AutocompleteSearchInterface } from '../../redux/state/autocompleteSearch.state';

const AutocompleteSearchReducer = (state: AutocompleteSearchInterface = initialAutocompleteSearchState, action: any): AutocompleteSearchInterface => {
	if (action.type === T.SET_AUTOCOMPLETE_SEARCH) {
		return {
			...state,
			citys: action.payload
		};
	}
	return state;
};
export default AutocompleteSearchReducer;