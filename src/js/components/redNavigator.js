import React from 'react';

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
		const arr = ['推荐','排行榜','歌单','主播电台','歌手','新碟上架'];

		const navigators = <nav className="m-nav" ref="nav" onClick={this.clickHandle}>
			{arr.map((val, index) => (
				<li key={index}><a key={index}>{val}</a></li>
			))}
		</nav>;

		return (
			<ul className="g-nav">
				{navigators}
			</ul>
		)
	}
}
