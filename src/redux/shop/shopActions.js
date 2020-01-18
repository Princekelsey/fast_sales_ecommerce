import { UPDATE_COLLECTIONS } from "./shopActionTypes";

export const updateShopCollections = collectionsMap => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap
});
