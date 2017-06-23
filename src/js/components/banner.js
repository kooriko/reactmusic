import React from 'react';

import banner_1 from '../../images/banner_1.jpg';
import banner_2 from '../../images/banner_2.jpg';
import banner_3 from '../../images/banner_3.jpg';
import banner_4 from '../../images/banner_4.jpg';
import banner_5 from '../../images/banner_5.jpg';
import banner_6 from '../../images/banner_6.jpg';
import banner_7 from '../../images/banner_7.jpg';
import banner_8 from '../../images/banner_8.jpg';


export default class Banner extends React.Component{
	render(){
		return (
			<div className="m-banner">
				<img src={banner_1} alt="..."/>
				<img src={banner_2} alt="..."/>
				<img src={banner_3} alt="..."/>
				<img src={banner_4} alt="..."/>
				<img src={banner_5} alt="..."/>
				<img src={banner_6} alt="..."/>
				<img src={banner_7} alt="..."/>
				<img src={banner_8} alt="..."/>
			</div>
		)
	}
}
