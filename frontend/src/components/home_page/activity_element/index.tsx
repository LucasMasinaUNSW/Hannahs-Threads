import React from "react";
import { Link } from "react-router-dom";


interface ActivityProps {
    activityName: string
}

function Activity(props: ActivityProps) {
    return (
      <div className={props.activityName}>
        <p>{props.activityName} activity</p>
        <Link to={`/${props.activityName}`}>Go to activity</Link>
      </div>
    );
  }
  
export default Activity;