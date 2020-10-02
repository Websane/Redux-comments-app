import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './containers/app';
import {createStore} from 'redux';
import todos from './reducers/reducers';

const initialState = {
	comments: localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [],
	newComments: {newUser: '', newComment: ''}
}

const store = createStore(todos, initialState);

ReactDOM.render(
	<React.StrictMode>
		<App store={store} />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();