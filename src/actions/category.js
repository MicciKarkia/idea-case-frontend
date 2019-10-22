import ActionTypes from './ActionTypes';
import axios from 'axios';
import {
  API_ROOT
} from '../constants/AppConstants';

// ACTION CREATORS (Action object creator functions)

// Categories SHOW ALL
export const categoriesAll_REQ = () => ({
  type: ActionTypes.CATEGORIES_ALL_REQ,
});
export const categoriesAll_OK = (categoryList) => ({
  type: ActionTypes.CATEGORIES_ALL_OK,
  categoryList: categoryList
});
export const categoriesAll_X = () => ({
  type: ActionTypes.CATEGORIES_ALL_X,
});

export function fetchAllCategories() {
  return async (dispatch, getState) => {

    dispatch(categoriesAll_REQ());

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/category/all'
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(categoriesAll_OK(response.data));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(categoriesAll_X());
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  }
};

// CATEGORIES_SEARCH_REQ
export const categoriesSearch_REQ = (keyword) => ({
  type: ActionTypes.CATEGORIES_SEARCH_REQ,
  keyword: keyword,
});
export const categoriesSearch_OK = (categoryList) => ({
  type: ActionTypes.CATEGORIES_SEARCH_OK,
  categoryList: categoryList
});
export const categoriesSearch_X = () => ({
  type: ActionTypes.CATEGORIES_SEARCH_X,
});

export function categoriesSearchByKeyword(keyword) {
  return async (dispatch, getState) => {

    dispatch(categoriesSearch_REQ(keyword));

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + `/category/search/${keyword}`,
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(categoriesSearch_OK(response.data));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(categoriesSearch_X());
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  }
};

// Category ADD
export const categoryAdd_REQ = (category) => ({
  type: ActionTypes.CATEGORY_ADD_REQ,
  category: category,
});
export const categoryAdd_OK = () => ({
  type: ActionTypes.CATEGORY_ADD_OK,
});
export const categoryAdd_X = () => ({
  type: ActionTypes.CATEGORY_ADD_X,
});

export function addCategory(category) {
  return async (dispatch, getState) => {

    dispatch(categoryAdd_REQ(category));

    // Here would be some async AJAX call with await...
    // ... or some promises or so
    const ajaxRequest = {
      method: 'post',
      url: API_ROOT + '/category',
      data: category,
    };

    axios(ajaxRequest)
      .then(() => {
        dispatch(categoryAdd_OK());
        dispatch(fetchAllCategories());
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(categoryAdd_X());
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  }
};

// Category DELETE
export const categoryDelete_REQ = (id) => ({
  type: ActionTypes.CATEGORY_DELETE_REQ,
  id: id,
});
export const categoryDelete_OK = () => ({
  type: ActionTypes.CATEGORY_DELETE_OK,
});
export const categoryDelete_X = () => ({
  type: ActionTypes.CATEGORY_DELETE_X,
});

export function deleteCategory(id) {
  return async (dispatch, getState) => {

    dispatch(categoryDelete_REQ(id));
    console.dir("Delete by this id: " + id);

    // Here would be some async AJAX call with await...
    // ... or some promises or so
    const ajaxRequest = {
      method: 'delete',
      url: API_ROOT + '/category/' + id,
    };

    axios(ajaxRequest)
      .then(() => {
        dispatch(categoryDelete_OK());
        dispatch(fetchAllCategories());
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(categoryDelete_X());
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  }
};

// Category GET One By Id
export const categoryGetById_REQ = (id) => ({
  type: ActionTypes.CATEGORY_GETBYID_REQ,
  id: id,
});
export const categoryGetById_OK = (category) => ({
  type: ActionTypes.CATEGORY_GETBYID_OK,
  category: category,
});
export const categoryGetById_X = () => ({
  type: ActionTypes.CATEGORY_GETBYID_X,
});

export function getCategory(id) {
  return async (dispatch, getState) => {
    dispatch(categoryGetById_REQ(id));
    console.dir("Get category with this id: " + id);

    // Here would be some async AJAX call with await...
    // ... or some promises or so
    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/category/' + id
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(categoryGetById_OK(response.data[0]));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(categoryGetById_X());
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  };
}

//Category UPDATE that One object
export const categoryUpdate_REQ = (category) => ({
  type: ActionTypes.CATEGORY_UPDATE_REQ,
  category: category,
});
export const categoryUpdate_OK = (category) => ({
  type: ActionTypes.CATEGORY_UPDATE_OK,
  category,
});
export const categoryUpdate_X = () => ({
  type: ActionTypes.CATEGORY_UPDATE_X,
});

export function updateCategory(category) {
  return async (dispatch, getState) => {
    dispatch(categoryUpdate_REQ(category));
    console.dir(category);

    // Here would be some async AJAX call with await...
    // ... or some promises or so
    const ajaxRequest = {
      method: 'put',
      url: API_ROOT + '/category/',
      data: category,
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(categoryUpdate_OK(category));
        dispatch(fetchAllCategories());
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(categoryUpdate_X());
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  };
}
