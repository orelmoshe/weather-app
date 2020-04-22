import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from './reducers';

export const store = createStore(reducers, composeWithDevTools());

export default store;