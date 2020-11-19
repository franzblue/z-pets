import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* selectPet(action) {
  console.log(action.payload);
  try {
    yield axios.post('/api/pets', action.payload);
  } catch (error) {
    console.log(error);
  }
 }

function* getPet() {
  try {
    const response = yield axios.get('/api/pets');
    console.log(response.data);
    yield put ( {type:'SET_PET', payload: response.data[0]} );
  } catch (error) {
    console.log(error);
  }
}

function* petSaga() {
    yield takeLatest('GET_PET', getPet)
    yield takeLatest('SELECT_PET', selectPet);
  }
  
  export default petSaga;