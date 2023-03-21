import React from "react";
import { GlobalStyles } from "@mui/material";
import theme from "./theme/theme";

const GStyles: React.FC = () => {
  return (
    <GlobalStyles
      styles={{
        root: {
          boxSizing: "border-box",
        },
        body: {
          padding: "0px",
          margin: "0px",
          width: "100vw",
          color: theme.palette.primary.contrastText,
        },
      }}
    />
  );
};

export default GStyles;
