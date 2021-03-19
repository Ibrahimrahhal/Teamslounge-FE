import React, { ReactElement } from "react";
import InputIcon from "../../input-icon/index";
import Props from "./props";

export default (props: Props): ReactElement => {
  const [passShown, setPassShown] = React.useState(true);
  const selectedIcon: string = passShown ? "eye-blocked" : "eye";
  return (
    <InputIcon
      {...props}
      iconName={selectedIcon}
      onIconClicked={() => setPassShown(!passShown)}
    />
  );
};
