import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  firestore,
  convertCollectionSnapShotToMap
} from "../../firebase/firebase.utils";
import { fetchShopCollectionsSuccess } from "./shopActions";
import {
  FETCH_COLLECTIONS_FAIL,
  FETCH_COLLECTIONS_PENDING
} from "./shopActionTypes";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapShotToMap, snapshot);
    yield put(fetchShopCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put({
      type: FETCH_COLLECTIONS_FAIL,
      payload: error.message
    });
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_PENDING, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
