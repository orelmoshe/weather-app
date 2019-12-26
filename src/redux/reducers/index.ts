import { combineReducers } from 'redux';
import answersReducer from './answers.reducer';
import routeReducer from './route.reducer';

export default combineReducers({
	questions: answersReducer,
	currentPage: routeReducer,
});
