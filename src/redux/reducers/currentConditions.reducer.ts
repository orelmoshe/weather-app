import * as T from '../types';
import initialCurrentConditionsState, { CurrentConditionsInterface } from '../../redux/state/currentConditions.state';

const CurrentConditionsReducer = (state: CurrentConditionsInterface = initialCurrentConditionsState, action: any): CurrentConditionsInterface => {
	if (action.type === T.SET_CURRENT_CONDITIONS) {
		return {
			...state,
			currentCity: action.payload
		};
	}
	return state;
};
export default CurrentConditionsReducer;