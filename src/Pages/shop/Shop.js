import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../Components/collectionOverview/CollectionOverview";
import Catergory from "../category/Category";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={Catergory} />
    </div>
  );
};

export default Shop;
