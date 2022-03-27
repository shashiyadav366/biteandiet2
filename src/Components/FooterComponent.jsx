import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import { indigo } from "@material-ui/core/colors";
import {
  Box
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#27ae60",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        
        <Box my={1}>
              <Typography variant='subtitle1' color='#ffffff' align='center'>
             Bite&Diet - Nutritionist Consultant
              </Typography>
            </Box>
       
      </AppBar>
    </div>
  );
}
