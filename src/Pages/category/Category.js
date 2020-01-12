import React from "react";
import CollectionItem from "../../Components/collectionItems/CollectionItem";

import "./category.style.scss";

const Category = ({ match }) => {
  console.log(match);
  return (
    <div className="category">
      <h2>Catergory</h2>
    </div>
  );
};

export default Category;
