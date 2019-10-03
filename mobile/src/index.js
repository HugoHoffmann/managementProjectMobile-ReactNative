import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Toast } from 'react-native-redux-toast';
import '~/config/StatusBarConfig'; 
import '~/config/ReactotronConfig';

import store from './store';
import { View } from 'react-native';

import App from './App';

const Root = () => (
    <Provider store={store}>
        <Fragment>
            <App />
            <Toast/>
        </Fragment>
    </Provider>    

)


export default Root;
