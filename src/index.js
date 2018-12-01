import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store';

import './styles.css';
import Review from './containers/Review';


ReactDOM.render(<Provider store={store}>
  <Review/>
</Provider>, document.getElementById('root'));

