import React, { ReactElement } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Props from "./props";

export default ({ label, type, inputProps }: Props): ReactElement => {
  return (
    <FormControl>
      {label && <InputLabel htmlFor="my-input">{label}</InputLabel>}
      <OutlinedInput {...inputProps} type={type} label={label} />
      <FormHelperText id="my-helper-text">
        We&apos;ll never share your email.
      </FormHelperText>
    </FormControl>
  );
};
