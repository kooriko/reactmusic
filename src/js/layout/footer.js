import React from 'react';

export default class Footer extends React.Component{
	render(){

		const subLink = [
			{name: "关于网易", slug: 'https://music.163.com/about'},
			{name: "客户服务", slug: 'https://help.163.com'},
			{name: "服务条款", slug: 'https://music.163.com/html/web2/service.html'},
			{name: "网站导航", slug: 'https://sitemap.163.com'},
			{name: "意见反馈", slug: 'javascript: void 0;'}
		]

		const subLinks = <ul className="m-subLinks">
			{subLink.map(({name, slug}) => <li key={name}><a href={slug}>{name}</a></li>)}
		</ul>

		return(
			<footer className="g-footer">
				<div className="g-footLeft">
					{subLink}
					<p>Copyright (c) 2017 Copyright Holder All Rights Reserved.</p>
				</div>
				<div className="g-footRight">
				</div>
			</footer>
		)
	}
}
