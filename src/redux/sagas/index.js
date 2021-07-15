import { all, fork } from "@redux-saga/core/effects";
import watchGetColorsSaga from './watchers/setColor'
export default function* root() {
    yield all([
        fork(watchGetColorsSaga),
    ]);
}
