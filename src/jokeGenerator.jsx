import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import image from "./laugh (1).png";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#74b9ff",
  },
}));

export const renderText = ({ label, varnt, comp, color, align }) => (
  <Typography
    variant={varnt ? varnt : "body1"}
    conponent={comp ? comp : "h6"}
    color={color ? color : "primary"}
    align={align ? align : "center"}>
    {label}
  </Typography>
);

export default function JokeGenerator() {
  const URL = " https://official-joke-api.appspot.com/jokes/random";
  const classes = useStyles();
  const [joke, setJoke] = useState({});

  const generateJoke = () => {
    axios.get(URL).then(({ data }) => {
      setJoke(data);
      console.log("data", data);
    });
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={10} sm={7} lg={6}>
        <Paper component={Box} p={2}>
          <Box display='flex' justifyContent='center' mb={4} mt={3}>
            <img src={image} alt={"emogi"} />
          </Box>
          {renderText({
            label: "React JokeGenerator",
            varnt: "h4",
            comp: "h6",
            color: "textPrimary",
          })}

          {joke.setup ? (
            <Box mt={2} mb={2} p={2}>
              {renderText({
                label: joke.setup,
                varnt: "body1",
                comp: "h6",
                color: "primary",
              })}
              {renderText({
                label: joke.punchline,
                varnt: "body1",
                comp: "h6",
                color: "textSecondary",
              })}
            </Box>
          ) : (
            <Box mt={2} mb={2} p={2}>
              {renderText({
                label: "Please click the button to get joke",
                varnt: "body1",
                comp: "h6",
                color: "error",
              })}
            </Box>
          )}
          <Box display='flex' justifyContent='center' mb={4} mt={3}>
            <Button
              variant='contained'
              color='primary'
              size='medium'
              onClick={generateJoke}>
              {" "}
              Generate Joke{" "}
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
