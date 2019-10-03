import {call, put} from 'redux-saga/effects';

import MembersActions from '../ducks/members';
import api from '~/services/api';

export function* getMembers(){
    const response = yield call(api.get,'members');

    yield put(MembersActions.getMembersSuccess(response.data));
}


export function* updateMember({ id, roles }){
    try {
        yield call(api.put, `members/${id}`, {roles: roles.map(role => role.id)});

    } catch (error) {
        
    }
}


export function* inviteMember({ email }){
    try {
        yield call(api.post, 'invites', {invites: [email]});

    } catch (error) {
       
    }
}
