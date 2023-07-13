import { call, put, all, takeLatest } from "redux-saga/effects";
import {
  fetchCategoriesFailuare,
  fetchCategoriesSuccess,
} from "./categories.action";
import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";
import { CATEGORIES_ACTION_TYPES } from "./categoris.types";

export function* fetchCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocument);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailuare(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
