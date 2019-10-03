import {call, put} from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import MembersActions from '../ducks/members';
import api from '~/services/api';

export function* getMembers(){
    const response = yield call(api.get,'members');

    yield put(MembersActions.getMembersSuccess(response.data));
}


export function* updateMember({ id, roles }){
    try {
        yield call(api.put, `members/${id}`, {roles: roles.map(role => role.id)});
        yield put(ToastActionsCreators.displayInfo('Sucesso ao atualizar'));
    } catch (error) {
        yield put(ToastActionsCreators.displayError('Houve algum problema, tente novamente'));       
    }
}


export function* inviteMember({ email }){
    try {
        yield call(api.post, 'invites', {invites: [email]});
        yield put(ToastActionsCreators.displayInfo('Convite realizado'));
    } catch (error) {
        yield put(ToastActionsCreators.displayError('Houve algum problema, tente novamente'));       
    }
}
