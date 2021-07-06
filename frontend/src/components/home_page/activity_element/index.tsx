import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 345,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 300,
  },
});

interface ActivityProps {
  activityName: string
}

function Activity(props: ActivityProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/logo512.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.activityName} activity card
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Click below to access the {props.activityName} activity
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component={Link} to={`/${props.activityName}`} color="primary" size="large">Go to {props.activityName}</Button>
      </CardActions>
    </Card>
  );
}
  
export default Activity;