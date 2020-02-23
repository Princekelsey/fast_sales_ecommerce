import {
  FETCH_COLLECTIONS_FAIL,
  FETCH_COLLECTIONS_PENDING,
  FETCH_COLLECTIONS_SUCCESS
} from "./shopActionTypes";

const initialState = {
  collections: null,
  isPending: false,
  error: false
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COLLECTIONS_PENDING:
      return {
        ...state,
        isPending: true
      };

    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isPending: false,
        collections: payload,
        error: false
      };

    case FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        isPending: false,
        error: payload
      };

    default:
      return state;
  }
};

export default shopReducer;
