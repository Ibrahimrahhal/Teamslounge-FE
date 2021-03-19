import React, { ReactElement } from "react";
import InputIcon from "../../input-icon/index";
import Props from "./props";

export default (props: Props): ReactElement => {
  const [passShown, setPassShown] = React.useState(false);
  const selectedIcon: string = passShown ? "eye-blocked" : "eye";
  const type: string = passShown ? "text" : "password";
  return (
    <InputIcon
      {...props}
      type={type}
      iconName={selectedIcon}
      onIconClicked={() => setPassShown(!passShown)}
    />
  );
};
