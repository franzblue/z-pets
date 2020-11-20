import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* adminGetPet() {
    try {
      const response = yield axios.get('/api/admin');
      console.log(response.data);
      yield put ( {type:'SET_ADMIN_PET', payload: response.data} );
    } catch (error) {
      console.log(error);
    }
}

function* adminDelete(action) {
    console.log('delete request', action);
    try{
        yield axios.delete(`/api/admin/${action.payload}`);
        yield put ( {type: 'GET_ADMIN_PET'} );
    } catch (error) {
        console.log('error', error);
    }
}

function* adminGetUser() {
    try {
      const response = yield axios.get('/api/admin/user');
      console.log(response.data);
      yield put ( {type:'SET_ADMIN_USER', payload: response.data} );
    } catch (error) {
      console.log(error);
    }
}

function* adminDeleteUser(action) {
    console.log('delete request', action);
    try{
        yield axios.delete(`/api/admin/user/${action.payload}`);
        yield put ( {type: 'GET_ADMIN_USER'} );
    } catch (error) {
        console.log('error', error);
    }
}

function* adminSaga() {
    yield takeLatest('GET_ADMIN_PET', adminGetPet);
    yield takeLatest('DELETE_PET', adminDelete);
    yield takeLatest('GET_ADMIN_USER', adminGetUser);
    yield takeLatest('DELETE_USER', adminDeleteUser);
  }
  
  export default adminSaga;