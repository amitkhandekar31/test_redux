import { put, takeLatest, call } from 'redux-saga/effects';
import { setColor } from '../../actions';

function* workerSetColorSaga() {
    const colors = yield call("#f4f4f4");
    yield put(setColor(colors));
}

export default function* watchGetColorsSaga() {
    yield takeLatest("GET_COLORS_SAGA", workerSetColorSaga);
}