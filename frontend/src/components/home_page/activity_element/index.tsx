import { useState } from "react";


interface ActivityProps {
    activityName: string
}

function Activity(props: ActivityProps) {
    
    const [count, setCount] = useState(0);

    return (
      <div className={props.activityName}>
        <p>{props.activityName} activity</p>
        <h3>Count: {count}</h3> 
        <button onClick={() => setCount(count + 1)}>Go to activity</button>
      </div>
    );
  }
  
export default Activity;