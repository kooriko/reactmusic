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
			<div>
				<RedNavigator stateChangeHandle={this.stateChangeHandle}/>
				<div className="z-F5background">
					<div className="g-body width-75">
						<Route path="/" exact component={Home}/>
						<Route path="/toplist" component={TopList}/>
						<Route path="/playlist" component={PlayList}/>
						<Route path="/djradio" component={DjRadio}/>
						<Route path="/artist" component={Artist}/>
						<Route path="/album" component={Album}/>
					</div>
				</div>
			</div>
		)
	}
}
