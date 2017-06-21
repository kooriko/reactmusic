import React from 'react';
import Header from './header';

export default class App extends React.Component {

<<<<<<< HEAD
	render(){
		return (
			<div>
				<Header/>
			</div>
		)
=======
	// clickHandle = () => {
	// 	console.log(1);
	// }

	render() {
		return (
			<header>
				<h1 onClick={this.clickHandle}>React Music!测试</h1>
			</header>
		);
>>>>>>> eaf700c93a259977506b52bca1067e25d501f69e
	}
}
