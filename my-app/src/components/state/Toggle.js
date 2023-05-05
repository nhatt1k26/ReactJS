import React, { useState } from "react";
import "./ToggleStyle.css";
function Toggle() {
  useState();
  const array = useState(false);
  const [on, setOn] = useState(false);
  console.log(on);

 const handleToggle = () =>{
    setOn((on) => !on)
 }
  return (
    <div>
      <div className={`toggle ${on ? "active" :""}`} onClick = {handleToggle}>
        <div className={`spinner ${on ? "active" :""}`}></div>
      </div>
      {/* {on ?  "Spinner is On": "Spinner is Off"} */}
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick = {() => setOn(true)}>On</div>
        <div className="toggle-off" onClick = {() => setOn(false)} >Off</div>
      </div> */}
    </div>
  );
}

export default Toggle;
