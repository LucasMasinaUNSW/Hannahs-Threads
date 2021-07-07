import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteIcon from '@material-ui/icons/Delete';
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
    marginBottom: 20,
  },
  media: {
    height: 300,
  },
  button: {
    margin: 'auto',
  },
});

interface uploadPreviewProps {
  itemInfo: ItemInfo,
  handleTypeChange: (e: React.ChangeEvent<{ value: unknown }>, itemId: number) => void,
  handleDescriptionChange: (e: React.ChangeEvent<{ value: unknown }>, itemId: number) => void,
  handleItemDeletion: (id: number) => void,
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
        </Grid>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={() => props.handleItemDeletion(props.itemInfo.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default UploadPreview;