import React from "react";
import Activity from "./activity_element";
import Banner from "./banner";
import Grid from '@material-ui/core/Grid';
import CSS from 'csstype';
import UploadButtons from "./upload_button";

const inlineStyles: CSS.Properties = {
  margin: 'auto',
  width: '50%',
}

function Home() {
  return (
    <div className="Home page">
      <Banner/>
      <Grid container spacing={10} justify="center" alignItems="center" style={inlineStyles}>
        <Grid item xs={4}>
          <Activity activityName="designs"/>
        </Grid>
        <Grid item xs={4}>
          <Activity activityName="fabrics"/>
        </Grid>
        <Grid item xs={4}>
          <Activity activityName="closet"/>
        </Grid>
        <Grid item xs={12}>
          <UploadButtons/>
        </Grid>
      </Grid>
    </div>
  );
}
  
export default Home;