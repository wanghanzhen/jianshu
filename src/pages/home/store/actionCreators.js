import * as actionTypes from './actionTypes';

export const changHomeData = (result) => ({
	type: actionTypes.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});

export const homeDataRequest = () => ({
	type: actionTypes.HOME_DATA_REQUEST,
})

export const moreListRequest = (page) => ({
	type: actionTypes.MORE_LIST_REQUEST,
	page
})

export const addHomeList = (list, nextPage) => ({
	type: actionTypes.ADD_ARTICLE_LIST,
	list: list,
	nextPage
})

export const toggleTopShow = show => ({
	type: actionTypes.TOGGLE_SCROLL_TOP,
	show
})
