import React, { ReactElement } from "react";
import Props from "./props";

export default ({ iconName }: Props): ReactElement => {
  return <i className={`icon-${iconName}`} aria-hidden="true" />;
};
