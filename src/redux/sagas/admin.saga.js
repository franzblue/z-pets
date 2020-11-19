import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* adminGET() {
    try {
      const response = yield axios.get('/api/admin');
      console.log(response.data);
      yield put ( {type:'SET_ADMIN', payload: response.data} );
    } catch (error) {
      console.log(error);
    }
}

function* adminDELETE(action) {
    console.log('delete request', action);
    try{
        yield axios.delete(`/api/admin/${action.payload}`);
        yield put ( {type: 'GET_ADMIN'} );
    } catch (error) {
        console.log('error', error);
    }
}

function* adminSaga() {
    yield takeLatest('GET_ADMIN', adminGET);
    yield takeLatest('DELETE_PET', adminDELETE);
  }
  
  export default adminSaga;