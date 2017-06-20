import React from 'react';

export default class App extends React.Component{

	clickHandle = () =>{
		console.log(1);
	}

	render(){
		return (
			<header>
				<h1 onClick={this.clickHandle}>React Music!</h1>
			</header>
		)
	}
}
