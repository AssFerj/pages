import { Grid } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer/Footer";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import theme from "../theme/theme";

interface DefaultLayoutProps {
  component: React.FC;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  component: Component,
}) => {
  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid item xs={12}>
        <ResponsiveAppBar />
      </Grid>

      <Grid item xs={12} margin={0} padding={0}>
        <Component />
      </Grid>

      <Grid
        item
        container
        xs={12}
        bgcolor={theme.palette.primary.main}
        color={theme.palette.primary.contrastText}
      >
        <Footer />
      </Grid>
    </Grid>
  );
};

export default DefaultLayout;
