import * as T from '../types';
import initialCurrentConditionsState, { CurrentConditionsInterface } from '../../redux/state/currentConditions.state';

const CurrentConditionsReducer = (state: CurrentConditionsInterface = initialCurrentConditionsState, action: any): CurrentConditionsInterface => {
	if (action.type === T.SET_APPLICATION_PAGE) {
		return {
			...state,
			currentCity: action.payload
		};
	}
	return state;
};
export default CurrentConditionsReducer;