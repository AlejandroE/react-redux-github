import { applyMiddleware, createStore } from 'redux';

import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducer from '../reducers/reducers';

const middleware = applyMiddleware(promise(), thunk);
const store = createStore(reducer, middleware);

export default store;
