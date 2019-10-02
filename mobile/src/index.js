import React from 'react';
import { Provider } from 'react-redux';
import '~/config/StatusBarConfig';

import store from './store';
import { View } from 'react-native';

import App from './App';

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>    

)


export default Root;
