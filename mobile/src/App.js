import React, { Component } from 'react';

import { View } from 'react-native';

import NavigationService from './services/navigation';
import Routes from './routes';

export default class App extends Component {
    registerService = (ref) => {
        NavigationService.setTopLevelNavigatior(ref);
    }
  render() {
    return <Routes ref={this.registerService} />;
  }
}
