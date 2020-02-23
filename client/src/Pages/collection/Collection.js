import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionId } from "../../redux/shop/shopSelectors";
import CollectionItem from "../../Components/collectionItems/CollectionItem";

import "./collection.style.scss";

const Collection = ({ match }) => {
  const id = match.params.collectionId;
  const collection = useSelector(state => selectCollectionId(id)(state));

  const { title, items } = collection;
  return (
    <div className="collection-page ">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
