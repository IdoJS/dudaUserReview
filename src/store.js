import { createStore } from 'redux';
import reviewReducer from './reducers/reviewReducer';

const store = createStore(
  reviewReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;


export default store;
