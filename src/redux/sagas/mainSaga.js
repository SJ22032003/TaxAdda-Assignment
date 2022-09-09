import { call, put } from "redux-saga/effects";
import { addGstinList, addTagsList, getTagsList } from "../api/apis";
import {
  ADD_GSTIN_LIST_SUCCESS,
  ADD_TAGS_LIST_SUCCESS,
  GET_TAGS_LIST_SUCCESS,
} from "../ActionType";

// Add GSTIN List
export function* handleAddGstinList(action) {
  try {
    const response = yield call(addGstinList, action);
    if (response) {
      yield put({
        type: ADD_GSTIN_LIST_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(response , "respsonse");
  }
}

// ADD Tags List
export function* handleAddTagsList(action) {
  const response = yield call(addTagsList, action);
  try {
    if (response) {
      yield put({
        type: ADD_TAGS_LIST_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

// GET Tags List
export function* handleGetTagsList() {
  try {
    const response = yield call(getTagsList);
    if (response) {
      yield put({
        type: GET_TAGS_LIST_SUCCESS,
        payload: response.tags,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
