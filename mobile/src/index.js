import React from 'react';
import { Provider } from 'react-redux';
import '~/config/StatusBarConfig';

import store from './store';
import { View } from 'react-native';

import Routes from './routes';

const Root = () => (
    <Provider store={store}>
        <Routes />
    </Provider>    

)


export default Root;
