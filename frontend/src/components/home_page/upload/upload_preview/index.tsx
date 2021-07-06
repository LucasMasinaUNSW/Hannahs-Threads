import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import TypeSelect from "./type_select";
import ItemInfo from "../interfaces";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

interface uploadPreviewProps {
  itemInfo: ItemInfo,
  handleChange: any
}

function UploadPreview(props: uploadPreviewProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Grid container spacing={0} justify="center" alignItems="flex-start">
          <Grid item xs={4}>
            <CardMedia className={classes.media} image={props.itemInfo.imageSource} title={props.itemInfo.imageName} />
          </Grid>
          <Grid item xs={8}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Upload preview heading
              </Typography>
              <TypeSelect handleChange={props.handleChange} itemInfo={props.itemInfo} />
            </CardContent>
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

export default UploadPreview;