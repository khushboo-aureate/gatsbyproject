import React from "react";

import containerStyles from "./container.module.css";
console.log("conatnerstyle123======");
console.log(containerStyles);

export default function Container({ children }) {
    return <div className={containerStyles.container}>{children}</div>
  }