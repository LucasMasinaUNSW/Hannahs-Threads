import Activity from "./activity_element";
import Banner from "./banner";

function Home() {
  return (
    <div className="Home page">
      <Banner/>
      <Activity activityName="closet"/>
      <Activity activityName="designs"/>
      <Activity activityName="fabrics"/>
    </div>
  );
}
  
export default Home;