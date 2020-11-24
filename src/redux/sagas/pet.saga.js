import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* selectPet(action) {
  console.log(action.payload);
  try {
    yield axios.post('/api/pets', action.payload);
    yield put( {type: 'GET_PET'} );
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

function* feedPet(action) {
    try {
        yield axios.put(`/api/pets/feed/${action.payload}`, action.payload);
        yield put( {type: 'GET_PET'} );
    }
    catch (error) {
        console.log('feeding pet failed', error);
    }
}

function* hungerPet(action) {
  try {
    yield axios.put(`/api/pets/hunger/${action.payload}`, action.payload);
    yield put( {type: 'GET_PET'} );
  }
  catch (error) {
    console.log('lowering food failed', error);
  }
}

function* walkPet(action) {
  try {
      yield axios.put(`/api/pets/walk/${action.payload}`, action.payload);
      yield put( {type: 'GET_PET'} );
  }
  catch (error) {
      console.log('walking pet failed', error);
  }
}

function* getCrickets() {
  try {
    const response = yield axios.get('/api/pets/crickets');
    console.log(response.data);
    yield put ( {type:'SET_CRICKETS', payload: response.data} );
  }
  catch (error) {
    console.log('getting crickets failed', error);
  }
}

function* goToSleep(action) {
  try {
    yield axios.put(`/api/pets/sleep/${action.payload}`, action.payload);
    yield put( {type: 'GET_PET'} );
  }
  catch (error) {
    console.log('going to sleep failed', error);
}
}

function* minusHealth(action) {
  try {
    yield axios.put(`/api/pets/hurt/${action.payload}`, action.payload)
    yield put( {type: 'GET_PET'} );
  }
  catch (error) {
    console.log('hurting pet failed', error);
  }
}

function* addAge(action) {
  try {
    yield axios.put(`/api/pets/age/${action.payload}`, action.payload)
    yield put( {type: 'GET_PET'} );
  }
  catch (error) {
    console.log('aging pet failed', error);
  }
}

function* petSaga() {
    yield takeLatest('GET_PET', getPet);
    yield takeLatest('SELECT_PET', selectPet);
    yield takeLatest('FEED', feedPet);
    yield takeLatest('LOWER_FOOD', hungerPet);
    yield takeLatest('WALK', walkPet);
    yield takeLatest('GET_ALL_CRICKETS', getCrickets);
    yield takeLatest('GO_SLEEP', goToSleep);
    yield takeLatest('MINUS_HEALTH', minusHealth);
    yield takeLatest('AGE_PET', addAge);
  }
  
  export default petSaga;