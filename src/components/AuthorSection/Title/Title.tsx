import { Typography } from "@mui/material";
import React from "react";
import theme from "../../../config/theme/theme";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <Typography
      variant="h4"
      color={theme.palette.secondary.contrastText}
      textAlign={"center"}
    >
      {text}
    </Typography>
  );
};

export default Title;
