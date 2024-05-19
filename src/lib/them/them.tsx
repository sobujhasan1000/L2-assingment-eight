import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00C1D8",
    },
    secondary: {
      main: "#8467D7",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
});
