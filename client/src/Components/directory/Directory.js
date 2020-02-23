import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/MenuItem";
import { selectDirectorySections } from "../../redux/directory/directorySelectors";

import "./directory.style.scss";

const Directory = () => {
  const { sections } = useSelector(
    createStructuredSelector({
      sections: selectDirectorySections
    })
  );
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
