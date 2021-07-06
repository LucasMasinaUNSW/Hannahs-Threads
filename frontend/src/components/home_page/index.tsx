import Activity from "./activity_element";
import Banner from "./banner";
import Grid from '@material-ui/core/Grid';
import CSS from 'csstype';

const inlineStyles: CSS.Properties = {
  margin: 'auto',
  width: '50%',
}

function Home() {
  return (
    <div className="Home page">
      <Banner/>
      <Grid container spacing={0} justify="center" alignItems="center" style={inlineStyles}>
        <Grid container item xs={6}>
          <Grid container item direction="column" spacing={10}>
            <Grid item xs={12}>
              <Activity activityName="designs"/>
            </Grid>
            <Grid item xs={12}>
              <Activity activityName="fabrics"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={6}>
          <Grid container item direction="column" spacing={1}>
            <Grid item xs={12}>
              <Activity activityName="closet"/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
  
export default Home;