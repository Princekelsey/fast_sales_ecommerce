import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../previewCollection/PreviewCollection";
import { selectShopCollectionsPreview } from "../../redux/shop/shopSelectors";

import "./collectionOverview.style.scss";

const CollectionOverview = () => {
  const { collections } = useSelector(
    createStructuredSelector({
      collections: selectShopCollectionsPreview
    })
  );
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
