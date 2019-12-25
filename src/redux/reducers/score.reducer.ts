import * as T from '../types';
import initialScoreState, { ScoreInterface } from '../../redux/state/score.state';

const scoreReducer = (state: ScoreInterface = initialScoreState, action: any): ScoreInterface => {
	if (action.type === T.SET_SCORE) {
		return {
			...state,
			score: action.payload
		};
	}
	return state;
};
export default scoreReducer;
