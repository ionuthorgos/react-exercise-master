import React, { Component } from 'react';

import TopBarContainer from '../components/topbarContainer';
import HomeContent from '../components/HomeContent';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <TopBarContainer />
        <HomeContent/>
      </div>
    );
  }
}

