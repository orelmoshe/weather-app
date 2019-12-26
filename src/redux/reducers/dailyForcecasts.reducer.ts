import * as T from '../types';
import initialDailyForcecastsState, { DailyForcecastsInterface } from '../../redux/state/dailyForcecasts.state';

const DailyForcecastsReducer = (state: DailyForcecastsInterface = initialDailyForcecastsState, action: any): DailyForcecastsInterface => {
	if (action.type === T.SET_APPLICATION_PAGE) {
		return {
			...state,
			dailyForcecasts: action.payload
		};
	}
	return state;
};
export default DailyForcecastsReducer;