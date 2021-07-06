import Activity from "./activity_element";
import Banner from "./banner";
import Grid from '@material-ui/core/Grid';

function Home() {
  return (
    <div className="Home page">
      <Banner/>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs>
          <Grid container direction="column" spacing={3}>
            <Grid item xs>
              <Activity activityName="designs"/>
            </Grid>
            <Grid item xs>
            <Activity activityName="fabrics"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container direction="column" spacing={1}>
            <Grid item xs>
              <Activity activityName="closet"/>
            </Grid>  
          </Grid>
          </Grid>
      </Grid>
    </div>
  );
}
  
export default Home;