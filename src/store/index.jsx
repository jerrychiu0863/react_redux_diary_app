import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers';

import { save, load } from 'redux-localstorage-simple';

const createStoreWithMiddleware = applyMiddleware(save())(createStore);

const store = createStoreWithMiddleware(reducer, load());

export default store;