import * as actionTypes from './actionTypes';

export const changeDetail = (title, content) => ({
  type: actionTypes.CHANGE_DETAIL,
  title,
  content
})

export const detailRequest = id => ({
  type: actionTypes.DETAIL_REQUEST,
  id
})

