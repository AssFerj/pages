import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import theme from "../../config/theme/theme";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import CircleIcon from "@mui/icons-material/Circle";
import Book from "../../images/Book.png";

// Ajuda para ajustar a responsividade da hero section

const HeroSection: React.FC = () => {
  return (
    <React.Fragment>
      <Grid bgcolor={theme.palette.primary.main} padding={"10em 0"}>
        <Container maxWidth="xl" sx={{ display: "flex" }}>
          <Grid item xs={12} display={"flex"} alignItems={"center"}>
            <Grid item display={"flex"} direction={"column"}>
              <LinearScaleIcon color="secondary" sx={{ mr: 1 }} />
              <Typography
                variant="body2"
                color={theme.palette.primary.contrastText}
              >
                Welcome to Pages
              </Typography>
              <Typography variant="h3">
                Books are uniquely
                <br />
                portable magic
              </Typography>
              <Typography variant="body2" mt={2} color={"#B4C7E7"}>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration in some form.
              </Typography>
              <Grid item mt={4} display={"flex"}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ borderRadius: "0px", marginRight: "1rem" }}
                >
                  Order Today
                </Button>
                <Button
                  variant="text"
                  color="secondary"
                  style={{ borderRadius: "0px", textDecoration: "underline" }}
                >
                  Read Free Demo
                </Button>
              </Grid>
              <Grid item display={"flex"} direction={"row"} marginTop={5}>
                <Box mr={1.5}>
                  <CircleIcon
                    color="secondary"
                    sx={{
                      width: "1rem",
                    }}
                  />
                </Box>
                <Box mr={8}>
                  <Typography variant="body1" fontWeight={"bold"}>
                    Pages:
                  </Typography>
                  <Typography variant="body2" color={"#B4C7E7"}>
                    586pages
                  </Typography>
                </Box>
                <Box mr={1.5}>
                  <CircleIcon
                    color="secondary"
                    sx={{
                      width: "1rem",
                    }}
                  />
                </Box>
                <Box mr={8}>
                  <Typography variant="body1" fontWeight={"bold"}>
                    Length:
                  </Typography>
                  <Typography variant="body2" color={"#B4C7E7"}>
                    10 Hours
                  </Typography>
                </Box>
                <Box mr={1.5}>
                  <CircleIcon
                    color="secondary"
                    sx={{
                      width: "1rem",
                    }}
                  />
                </Box>
                <Box mr={8}>
                  <Typography variant="body1" fontWeight={"bold"}>
                    Ratings:
                  </Typography>
                  <Typography variant="body2" color={"#B4C7E7"}>
                    4.5/5 (305 ratings)
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item display={"flex"} justifyContent={"center"}>
              <img src={Book} alt="Book - The Dark Light" width={350} />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default HeroSection;
