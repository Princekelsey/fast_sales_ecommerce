import shopData from "./shopData";

const initialState = {
  collections: shopData
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default shopReducer;
