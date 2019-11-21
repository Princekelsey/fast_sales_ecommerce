import React, { useState } from "react";
import MenuItem from "../menu-item/MenuItem";
import sessionCollection from "./sessionCollection";

import "./directory.style.scss";

const Directory = () => {
  const [sessions] = useState(sessionCollection);
  return (
    <div className="directory-menu">
      {sessions.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
