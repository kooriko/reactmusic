import React from 'react';

export default class Header extends React.Component{
	state = {
		hasLogined: false,
	}

	render(){
		const loginModule = this.state.hasLogined ?
		<div className="m-Logined">

		</div> :
		<div className="m-login">
		<a>登录</a>
			<ul>
				<li>手机号登录</li>
				<li>微信登录</li>
				<li>QQ登录</li>
				<li>新浪登录</li>
				<li>网易邮箱账号登录</li>
			</ul>
		</div>

		return (
			<header className="g-header">
				<div className="g-headLeft width-66">
					<div className="u-home"></div>
					<ul className="m-navigator">
						<li>发现音乐</li>
						<li>我的音乐</li>
						<li>朋友</li>
						<li>商城</li>
						<li>音乐人</li>
						<li>下载客户端</li>
					</ul>
				</div>

				<div className="g-headRight width-33">
					<div className="u-search">
						<i/><input placeholder="单曲/歌手/专辑/歌单/MV/用户"/>
					</div>
					{loginModule}
				</div>

				<div className="m-redBar">
				</div>
			</header>
		)
	}
}
