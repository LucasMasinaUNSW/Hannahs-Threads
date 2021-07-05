import { Link } from "react-router-dom";
import Activity from "./activity_element";
import Banner from "./banner";

function Home() {
  return (
    <div className="Home">
      <Banner/>
      <Link to="/closet"><Activity activityName="closet"/></Link>
      <Link to="/designs"><Activity activityName="designs"/></Link>
      <Link to="/fabrics"><Activity activityName="fabrics"/></Link>
    </div>
  );
}
  
export default Home;