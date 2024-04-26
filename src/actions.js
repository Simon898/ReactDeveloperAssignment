// actions.js

import axios from 'axios';

export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const FETCH_ITEMS = 'FETCH_ITEMS';

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({ type: FETCH_ITEMS, payload: response.data });
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
};

export const addItem = (title) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: title,
        body: 'New item added',
        userId: 1
      });
      dispatch({ type: ADD_ITEM, payload: response.data });
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };
};

export const editItem = (itemId, title) => {
  return async (dispatch) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${itemId}`, {
        title: title,
        body: 'Updated item content',
        userId: 1
      });
      dispatch({ type: EDIT_ITEM, payload: { id: itemId, title: title } });
    } catch (error) {
      console.error('Error editing item:', error);
    }
  };
};

export const deleteItem = (itemId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${itemId}`);
      dispatch({ type: DELETE_ITEM, payload: itemId });
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
};
