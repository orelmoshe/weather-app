import * as T from '../types';
import initialQuestionsPageState, {
	QuestionsPageInterface
} from '../../redux/state/questionsPage.state';

const questionsPageReducer = (
	state: QuestionsPageInterface = initialQuestionsPageState,
	action: any
): QuestionsPageInterface => {
	if (action.type === T.SET_QUESTION_PAGE) {
		return {
			...state,
			questionsPage: action.payload
		};
	}
	return state;
};
export default questionsPageReducer;
