import React, { ReactElement, ReactChildren } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Variables from "../../config/variables.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const theme = createMuiTheme(Variables.theme as any);

export default ({ children }: { children: ReactChildren }): ReactElement => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
