import * as actionTypes from './actionTypes';

export const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  totalPage: Math.ceil(data.length / 10),
  data,
});

export const listRequest = () => ({
  type: actionTypes.LIST_REQUEST
});

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const mouseEnter = () => ({
	type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: actionTypes.MOUSE_LEAVE
});

export const changePage = (page) => ({
	type: actionTypes.CHANGE_PAGE,
	page
});
