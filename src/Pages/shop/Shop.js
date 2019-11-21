import React, { useState } from "react";
import shopData from "./shopData";
import PreviewCollection from "../../Components/previewCollection/PreviewCollection";

const Shop = () => {
  const [collections] = useState(shopData);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Shop;
