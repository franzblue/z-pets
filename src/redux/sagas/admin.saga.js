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

function* adminSaga() {
    yield takeLatest('GET_ADMIN', adminGET);
  }
  
  export default adminSaga;