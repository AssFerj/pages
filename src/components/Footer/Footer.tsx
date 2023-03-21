import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import BookIcon from "@mui/icons-material/Book";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import theme from "../../config/theme/theme";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const date = new Date();
  return (
    <React.Fragment>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          pt: 10,
        }}
      >
        <Grid item xs={12} sm={3} textAlign={"center"} ml={1} mr={1}>
          <Box display={"flex"}>
            <BookIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              color={"secondary"}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Pages
            </Typography>
          </Box>
          <Box display={"flex"} mt={2}>
            <IconButton color="secondary" aria-label="facebook">
              <FacebookIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  ml: -1,
                  p: 1,
                  border: "1px solid #FFF",
                }}
              />
            </IconButton>
            <IconButton color="secondary" aria-label="facebook">
              <TwitterIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  ml: -1,
                  p: 1,
                  border: "1px solid #FFF",
                }}
              />
            </IconButton>
            <IconButton color="secondary" aria-label="facebook">
              <LinkedInIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  ml: -1,
                  p: 1,
                  border: "1px solid #FFF",
                }}
              />
            </IconButton>
            <IconButton color="secondary" aria-label="facebook">
              <InstagramIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  ml: -1,
                  p: 1,
                  border: "1px solid #FFF",
                }}
              />
            </IconButton>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          ml={2}
          mr={2}
          display={"flex"}
          direction={"column"}
          alignItems={"start"}
        >
          <Typography variant="body1" mb={3}>
            Explore
          </Typography>

          <Button
            variant="text"
            size="small"
            sx={{
              color: "#B4C7E7",
              padding: 0,
            }}
            onClick={() => navigate("/")}
          >
            <LinearScaleIcon color="secondary" sx={{ mr: 1.5 }} />
            Home
          </Button>

          <Button
            variant="text"
            size="small"
            sx={{
              color: "#B4C7E7",
              padding: 0,
            }}
            onClick={() => navigate("/about-author")}
          >
            <LinearScaleIcon color="secondary" sx={{ mr: 1.5 }} />
            About
          </Button>

          <Button
            variant="text"
            size="small"
            sx={{
              color: "#B4C7E7",
              padding: 0,
            }}
            onClick={() => navigate("/store")}
          >
            <LinearScaleIcon color="secondary" sx={{ mr: 1.5 }} />
            Store
          </Button>

          <Button
            variant="text"
            size="small"
            sx={{
              color: "#B4C7E7",
              padding: 0,
            }}
            onClick={() => navigate("/blog")}
          >
            <LinearScaleIcon color="secondary" sx={{ mr: 1.5 }} />
            Blog
          </Button>

          <Button
            variant="text"
            size="small"
            sx={{
              color: "#B4C7E7",
              padding: 0,
            }}
            onClick={() => navigate("/contact")}
          >
            <LinearScaleIcon color="secondary" sx={{ mr: 1.5 }} />
            Contact
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          ml={2}
          mr={2}
          display={"flex"}
          direction={"column"}
          alignItems={"start"}
        >
          <Typography variant="body1" mb={3}>
            Utility Pages
          </Typography>
          <Button
            variant="text"
            size="small"
            sx={{
              color: "#B4C7E7",
              padding: 0,
            }}
            onClick={() => navigate("/")}
          >
            <LinearScaleIcon color="secondary" sx={{ mr: 1.5 }} />
            Licences
          </Button>

          <Button
            variant="text"
            size="small"
            sx={{
              color: "#B4C7E7",
              padding: 0,
            }}
            onClick={() => navigate("/about-author")}
          >
            <LinearScaleIcon color="secondary" sx={{ mr: 1.5 }} />
            Changelog
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          ml={2}
          mr={2}
          display={"flex"}
          direction={"column"}
          alignItems={"start"}
        >
          <Typography variant="body1" mb={3}>
            Keep in Touch
          </Typography>
          <Box display={"flex"} mb={1}>
            <Typography variant="body2" mr={1} fontWeight={"bold"}>
              Address:
            </Typography>
            <Typography variant="body2" color={"#B4C7E7"}>
              24A Kingston St, Los Vegas NC 28202, USA.
            </Typography>
          </Box>

          <Box display={"flex"} mb={1}>
            <Typography variant="body2" mr={1} fontWeight={"bold"}>
              Mail:
            </Typography>
            <Typography variant="body2" color={"#B4C7E7"}>
              support@doctors.com
            </Typography>
          </Box>

          <Box display={"flex"} mb={1}>
            <Typography variant="body2" mr={1} fontWeight={"bold"}>
              Phone:
            </Typography>
            <Typography variant="body2" color={"#B4C7E7"}>
              (+22) 123 - 4567 - 900
            </Typography>
          </Box>
        </Grid>
      </Container>
      <Container sx={{ borderTop: "1px solid #B4C7E7", textAlign: "center" }}>
        <Typography mt={2} mb={2}>
          {date.getFullYear()} © Drafted by Assis Junior - Powered by{" "}
          <Button
            variant="text"
            size="small"
            sx={{
              color: theme.palette.secondary.main,
              padding: 0,
            }}
            onClick={() => navigate("/")}
          >
            Assis Junior W&M
          </Button>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
