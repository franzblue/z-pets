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
    try {
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
    try {
        yield axios.delete(`/api/admin/user/${action.payload}`);
        yield put ( {type: 'GET_ADMIN_USER'} );
        yield put ( {type: 'GET_ADMIN_PET'} );
    } catch (error) {
        console.log('error', error);
    }
}

function* updateLastLogged(action) {
    console.log('update last logged', action.payload);
    try {
        yield axios.put(`/api/admin/user/${action.payload}`);
    } catch (error) {
        console.log('error in last logged', error);
    }
}

function* makeAdmin(action) {
    console.log('in make Admin saga', action.payload);
    try {
        yield axios.put(`/api/admin/create/${action.payload}`);
        yield put ( {type: 'GET_ADMIN_USER'} );
    } catch (error) {
        console.log('error in make admin', error);
    }
}

function* sortUserId() {
    console.log('in sort user ID');
    try {
        const response = yield axios.get('/api/admin/user/sort_id');
        console.log(response.data);
        yield put ( {type:'SET_ADMIN_USER', payload: response.data} );
      } catch (error) {
        console.log(error);
      }
}

function* sortUsername() {
    console.log('in sort username');
    try {
        const response = yield axios.get('/api/admin/user/sort_username');
        console.log(response.data);
        yield put ( {type:'SET_ADMIN_USER', payload: response.data} );
      } catch (error) {
        console.log(error);
      }
}

function* sortUserLastLog() {
    console.log('in sort last log');
    try {
        const response = yield axios.get('/api/admin/user/sort_last_log');
        console.log(response.data);
        yield put ( {type:'SET_ADMIN_USER', payload: response.data} );
      } catch (error) {
        console.log(error);
      }
}

function* sortUserAdmin() {
    console.log('in sort last log');
    try {
        const response = yield axios.get('/api/admin/user/sort_admin');
        console.log(response.data);
        yield put ( {type:'SET_ADMIN_USER', payload: response.data} );
      } catch (error) {
        console.log(error);
      }
}

function* adminSaga() {
    yield takeLatest('GET_ADMIN_PET', adminGetPet);
    yield takeLatest('DELETE_PET', adminDelete);
    yield takeLatest('GET_ADMIN_USER', adminGetUser);
    yield takeLatest('DELETE_USER', adminDeleteUser);
    yield takeLatest('LAST_LOGGED', updateLastLogged);
    yield takeLatest('MAKE_ADMIN', makeAdmin);
    yield takeLatest('SORT_USER_ID', sortUserId);
    yield takeLatest('SORT_USER_USER', sortUsername);
    yield takeLatest('SORT_USER_LOG',sortUserLastLog);
    yield takeLatest('SORT_USER_ADMIN', sortUserAdmin);
  }
  
  export default adminSaga;