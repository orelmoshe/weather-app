import * as T from '../types';
import initialRouteState, { RouteInterface } from '../../redux/state/route.state';

const routeReducer = (state: RouteInterface = initialRouteState, action: any): RouteInterface => {
	if (action.type === T.SET_APPLICATION_PAGE) {
		return {
			...state,
			currentPage: action.payload
		};
	}
	return state;
};
export default routeReducer;
