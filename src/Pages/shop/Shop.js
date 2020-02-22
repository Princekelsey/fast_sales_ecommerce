import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CollectionOverviewContainer from "../../Components/collectionOverview/CollectionOverviewContainer";
import CollectionPageContainer from "../collection/collectionContainer";
import { fetchCollection } from "../../redux/shop/shopActions";

const Shop = ({ match }) => {
  const dispatch = useDispatch();
  const fetchCollectionsStart = () => dispatch(fetchCollection());

  useEffect(() => {
    fetchCollectionsStart();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default Shop;
