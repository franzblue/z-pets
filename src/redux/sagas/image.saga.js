import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getImage() {
    try {
      const response = yield axios.get('/api/image');
      console.log(response.data);
      yield put ( {type:'SET_IMAGE', payload: response.data[0]} );
    } catch (error) {
      console.log(error);
    }
}

function* imageSaga() {
    yield takeLatest('GET_IMAGE', getImage);
  }
  
  export default imageSaga;