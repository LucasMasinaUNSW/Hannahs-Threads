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
import ItemDescription from "./item_description";

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
  handleTypeChange: (e: React.ChangeEvent<{ value: unknown }>, itemId: number) => void,
  handleDescriptionChange: (e: React.ChangeEvent<{ value: unknown }>, itemId: number) => void,
}

function UploadPreview(props: uploadPreviewProps) {
  const classes = useStyles();

  return (
    <Card className={`${classes.root} ${classes.pos}`}>
      <CardActionArea>
        <Grid container spacing={0} justify="center" alignItems="flex-start">
          <Grid item xs={4}>
            <CardMedia className={classes.media} image={props.itemInfo.imageSource} title={props.itemInfo.imageName} />
          </Grid>
          <Grid item xs={8}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.itemInfo.imageName}
              </Typography>
              <TypeSelect handleChange={props.handleTypeChange} itemInfo={props.itemInfo} />
              <br/><br/>
              <ItemDescription handleChange={props.handleDescriptionChange} itemInfo={props.itemInfo}/>
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