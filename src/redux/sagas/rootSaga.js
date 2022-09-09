import { takeLatest } from "redux-saga/effects";
import { ADD_GSTIN_LIST, ADD_TAGS_LIST, GET_TAGS_LIST } from "../ActionType";
import { handleAddGstinList, handleAddTagsList, handleGetTagsList } from "./mainSaga";

export default function* rootSaga() {
  yield takeLatest(ADD_GSTIN_LIST, handleAddGstinList);
  yield takeLatest(ADD_TAGS_LIST, handleAddTagsList);
  yield takeLatest(GET_TAGS_LIST, handleGetTagsList);
}
