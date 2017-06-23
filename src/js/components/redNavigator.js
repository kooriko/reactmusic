import React from 'react';
import {Link} from 'react-router-dom';

export default class RedNavigator extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			activeNav: 0,
		}
	}

	clickHandle = (e) => {
		if(e.target.nodeName === 'A'){
			const num = Array.from(this.refs.nav.children).indexOf(e.target.parentNode);
			this.setState({
				activeNav: num,
			})
		}
	}

	navChangeHandle = () => {
		const navs = Array.from(this.refs.nav.children);
		navs.forEach(item => item.classList.remove('active'));
		navs[this.state.activeNav].classList.add('active');
	}

	componentDidUpdate = () => {
		this.navChangeHandle();
		// NOTE: 删除的子传父的代码。
		// this.props.stateChangeHandle(this.state.activeNav);
	}

	// NOTE: 这里是 redux 未完成代码。
	// const action = {
	// 	type: 'ADD_ACTIVENAV',
	// 	payload: this.state.activeNav
	// }

	render(){
		const routers = [
			{name: '推荐', slug: ''},
			{name: '排行榜', slug: 'toplist'},
			{name: '歌单', slug: 'playlist'},
			{name: '主播电台', slug: 'djradio'},
			{name: '歌手', slug: 'artist'},
			{name: '新碟上架', slug: 'album'}
		];

		const navigators = <nav className="m-nav" ref="nav" onClick={this.clickHandle}>
			{routers.map(({name, slug}) => (
				<li key={name}>
					<Link to={slug}>{name}</Link>
				</li>
			))}
		</nav>;

		return (
			<ul className="g-nav">
				{navigators}
			</ul>
		)
	}
}
