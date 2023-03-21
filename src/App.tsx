import GlobalStyles from "./config/GlobalStyles";
import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "@mui/material";
import theme from "./config/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
