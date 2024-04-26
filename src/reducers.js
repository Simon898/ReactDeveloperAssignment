// reducers.js

import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM, FETCH_ITEMS } from './actions';

const initialState = {
  items: [],
  loading: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, items: action.payload, loading: false, error: null };
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case EDIT_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...item, title: action.payload.title } : item
        )
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default rootReducer;
