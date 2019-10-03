import {call, put} from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import TeamsActions from '../ducks/teams';
import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';

export function* getTeams(){
    const response = yield call(api.get,'teams');

    yield put(TeamsActions.getTeamsSuccess(response.data));
}

export function* createTeam({ name }){
    try {
        const response = yield call(api.post, 'teams', {name});

        yield put(TeamsActions.createTeamSuccess(response.data));
        yield put(TeamsActions.closeTeamModal());
        yield put(ToastActionsCreators.displayInfo('Time criado com sucesso'));

    } catch (error) {
        yield put(ToastActionsCreators.displayError('Houve algum problema, tente novamente'));      
    }

}

export function* setActiveTeam({ team }){
    yield call([ AsyncStorage, 'setItem'], '@Management:team', JSON.stringify(team) );
}
