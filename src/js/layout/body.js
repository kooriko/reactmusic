import React from 'react';
import {Route} from 'react-router-dom';		// BUG: package.json 有错误，无法安装 react-router / react-router-dom

import RedNavigator from '../components/redNavigator';

import Home from '../routers/home';
import TopList from '../routers/topList';
import PlayList from '../routers/playList';
import DjRadio from '../routers/djRadio';
import Artist from '../routers/artist';
import Album from '../routers/album';

export default class Body extends React.Component{
	render(){
		return (
			<div className="z-F5background">
				<RedNavigator stateChangeHandle={this.stateChangeHandle}/>
				<div className="g-body width-75">
					<Route path="/" Component={Home}/>
					<Route path="/toplist" Component={TopList}/>
					<Route path="/playlist" Component={PlayList}/>
					<Route path="/djradio" Component={DjRadio}/>
					<Route path="/artist" Component={Artist}/>
					<Route path="/album" Component={Album}/>
				</div>
			</div>
		)
	}
}
