import React from 'react';
import {HashRouter as Router} from 'react-router-dom';

import Header from './layout/header';
import Body from './layout/body';

// NOTE:引入 redux 的未完成代码。
// import {createStore} from 'redux';
//
// const store = createStore(fn);
//
// const state = store.getState();

export default class App extends React.Component {
	render(){
		return (
			<Router>
				<div>
					<Header/>
					<Body/>
				</div>
			</Router>
		);
	}
}
