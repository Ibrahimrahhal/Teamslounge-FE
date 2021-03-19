import React, { ReactElement } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Input from "../../input/index";
import Props from "./props";
import Icon from "../../icon";

export default (props: Props): ReactElement => {
  const { onIconClicked, renderIcon, iconName } = props;
  const iconComponents: ReactElement = (
    <InputAdornment position="end">
      <IconButton onClick={() => onIconClicked()}>
        {renderIcon ? renderIcon() : <Icon iconName={iconName} />}
      </IconButton>
    </InputAdornment>
  );

  return <Input inputProps={{ endAdornment: iconComponents }} {...props} />;
};
