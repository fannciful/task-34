import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchHotels, setHotels } from '../slices/hotelsSlice';

function* handleFetchHotels(action) {
  try {
    const response = yield call(() =>
      axios.get('http://localhost:3000/hotels', { params: action.payload })
    );
    yield put(setHotels(response.data));
  } catch (error) {
    console.error('Failed to fetch hotels', error);
  }
}

export function* hotelsSaga() {
  yield takeEvery(fetchHotels.type, handleFetchHotels);
}
