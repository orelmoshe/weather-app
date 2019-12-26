import * as T from '../types';
import initialDailyForcecastsState, { DailyForcecastsInterface } from '../../redux/state/dailyForcecasts.state';

const DailyForcecastsReducer = (state: DailyForcecastsInterface = initialDailyForcecastsState, action: any): DailyForcecastsInterface => {
	if (action.type === T.SET_DAILT_FORCECASTS) {
		return {
			...state,
			dailyForcecasts: action.payload
		};
	}
	return state;
};
export default DailyForcecastsReducer;