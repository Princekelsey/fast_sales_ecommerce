import React from "react";
import "./previewCollection.style.scss";
import CollectionItem from "../collectionItems/CollectionItem";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collections">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
