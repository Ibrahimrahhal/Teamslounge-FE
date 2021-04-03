import React, { ReactElement } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Props from "./props";

export default ({ label, type, inputProps, help }: Props): ReactElement => {
  return (
    <FormControl>
      {label && <InputLabel variant="outlined">{label}</InputLabel>}
      <OutlinedInput {...inputProps} type={type} label={label} />
      {help && <FormHelperText>{help}</FormHelperText>}
    </FormControl>
  );
};
