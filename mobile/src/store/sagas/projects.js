import {call, put} from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import ProjectsActions from '../ducks/projects';
import api from '~/services/api';

export function* getProjects(){
    const response = yield call(api.get,'projects');

    yield put(ProjectsActions.getProjectsSuccess(response.data));
}

export function* createProject({ title }){
    try {
        const response = yield call(api.post, 'projects', {title});

        yield put(ProjectsActions.createProjectSuccess(response.data));
        yield put(ProjectsActions.closeProjectModal());
        yield put(ToastActionsCreators.displayInfo('Projecto criado com sucesso'));
    } catch (error) {
        yield put(ToastActionsCreators.displayError('Houve algum problema, tente novamente'));      
    }

}
