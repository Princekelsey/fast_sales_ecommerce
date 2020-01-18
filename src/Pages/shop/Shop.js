import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CollectionOverview from "../../Components/collectionOverview/CollectionOverview";
import Collection from "../collection/Collection";
import {
  firestore,
  convertColectionSnapShotToMap
} from "../../firebase/firebase.utils";
import { updateShopCollections } from "../../redux/shop/shopActions";
import Spinner from "../../Components/spinner/Spinner";

const CollectionsOverviewWithSpinner = Spinner(CollectionOverview);
const CollectionPageWithSpinner = Spinner(Collection);

const Shop = ({ match }) => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const updateCollection = collectionsMap =>
    dispatch(updateShopCollections(collectionsMap));

  useEffect(() => {
    let unsubscribeFromAuth = null;
    const collectionRef = firestore.collection("collections");
    unsubscribeFromAuth = collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertColectionSnapShotToMap(snapshot);
      updateCollection(collectionMap);
      setLoading(false);
    });
    return () => {
      unsubscribeFromAuth();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};

export default Shop;
