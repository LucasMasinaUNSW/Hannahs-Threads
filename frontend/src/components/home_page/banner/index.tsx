import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    color: '#000000',
  },
});

function Banner() {

  let classes = useStyles();

  return (
    <Typography className={classes.root} variant="h1" component="h2">Hannah's Threads</Typography>
  );
}
  
export default Banner;