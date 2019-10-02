import {call, put, select} from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';

import NavigationService from '~/services/navigation';

import AuthActions from '../ducks/auth';
import api from '~/services/api';

export function* signIn({ email, password }){
    try {
        const response = yield call(api.post,'sessions', {email, password} );

        yield call([AsyncStorage, 'setItem'], '@Management:token', response.data.token);

        yield put(AuthActions.signInSuccess(response.data.token))
        NavigationService.navigate('Main');
    } catch (error) {
        console.log('error');

    }
}

export function* signUp({ name, email, password }){
    try {
        const response = yield call(api.post,'users', {name, email, password} );
        yield call([AsyncStorage, 'setItem'], '@Management:token', response.data.token);

        yield put(AuthActions.signInSuccess(response.data.token))
        // yield put(push('/'));
    } catch (error) {
        console.log('error');
    }
}

export function* signOut(){
    yield call([AsyncStorage, 'clear']);

    // yield put(push('/signin'));
}

export function* getPermissions(){

    const team = yield select(state => state.teams.active);
    const signedIn = yield select(state => state.auth.signedIn);
    
    if(!signedIn || !team ){
        return;
    }

    const response = yield call(api.get, 'permissions');

    const {roles, permissions} = response.data;

    yield put(AuthActions.getPermissionsSuccess(roles, permissions));
}
