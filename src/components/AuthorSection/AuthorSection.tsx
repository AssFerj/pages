import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import bookData from "./bookData";
import Title from "./Title/Title";
import CircleIcon from "@mui/icons-material/Circle";
import theme from "../../config/theme/theme";

const AuthrSection: React.FC = () => {
  return (
    <React.Fragment>
      <Grid padding={"10em 0"}>
        <Container maxWidth="xl">
          <Title text="Author’s Book Includes" />
          <Divider
            sx={{
              width: "2rem",
              height: ".1rem",
              bgcolor: `${theme.palette.secondary.main}`,
              marginTop: ".5rem",
              textAlign: "center",
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            {bookData.map((item) => {
              return (
                <>
                  <Paper sx={{ margin: ".3rem" }} square elevation={4}>
                    {/* <img src={item.thumb} /> Ajuda para inserir a imagem*/}
                  </Paper>
                  <Paper sx={{ margin: ".3rem" }} square elevation={0}>
                    <Typography variant="h6">{item.bookTitle}</Typography>
                    <Typography variant="body2">
                      {item.bookDesscription}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 5,
                      }}
                    >
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
                          {item.detail1}
                        </Typography>
                        <Typography variant="body2" color={"#B4C7E7"}>
                          {item.pageDet}
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
                          {item.detail2}
                        </Typography>
                        <Typography variant="body2" color={"#B4C7E7"}>
                          {item.lengthDet}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </>
              );
            })}
          </Box>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default AuthrSection;
