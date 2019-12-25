import { combineReducers } from 'redux';
import answersReducer from './answers.reducer';
import routeReducer from './route.reducer';
import questionsPageReducer from './questionsPage.reducer';
import scoreReducer from './score.reducer';

export default combineReducers({
	questions: answersReducer,
	currentPage: routeReducer,
	questionsPage: questionsPageReducer,
	score: scoreReducer
});
