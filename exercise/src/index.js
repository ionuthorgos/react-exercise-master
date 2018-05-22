import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './routes/Landing';
import Home from './routes/Home';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import userReducer from './components/logIn/userReducer';
import UserDatailContainer from './components/UserDatailContainer';

const logger = store => next => (action) => {
	console.log('action fired', action);
	next(action);
};

const middleware = applyMiddleware(thunk, logger);

const reducers = combineReducers({
	userReducer
});
const store = createStore(reducers, middleware);

ReactDOM.render(
	(
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Landing} />
					<Route path="/home" component={Home} />
					<Route path="/users/:userId" component={UserDatailContainer} />
				</div>
			</BrowserRouter>
		</Provider>
	), document.getElementById('root')
);
registerServiceWorker();
