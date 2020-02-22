import {
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_PENDING
} from "./shopActionTypes";
// import {
//   firestore,
//   convertCollectionSnapShotToMap
// } from "../../firebase/firebase.utils";

export const fetchCollection = () => ({
  type: FETCH_COLLECTIONS_PENDING
});

export const fetchShopCollectionsSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

// export const fetchShopCollectionsCall = () => {
//   return dispatch => {
//     const collectionRef = firestore.collection("collections");
//     dispatch(setLoading());

//     collectionRef
//       .get()
//       .then(snapshot => {
//         const collectionsMap = convertCollectionSnapShotToMap(snapshot);
//         dispatch(fetchShopCollectionsSuccess(collectionsMap));
//       })
//       .catch(err =>
//         dispatch({
//           type: FETCH_COLLECTIONS_FAIL,
//           payload: err.message
//         })
//       );
//   };
// };
