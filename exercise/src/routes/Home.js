import React, { Component } from 'react';

import TopBarContainer from '../components/topbarContainer';
import HomeContent from '../components/HomeContent';
import HomeContainer from '../components/HomeContainer';
import UserDatail from '../components/UserDatail';


export default class Home extends Component {
	render() {
		return (
			<div className="App">
				<TopBarContainer />
				<HomeContainer />
			</div>
		);
	}
}

