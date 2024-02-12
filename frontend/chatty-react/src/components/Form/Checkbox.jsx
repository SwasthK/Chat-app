import React from "react";

export const Checkbox = ({selgen,onchange}) => {
  return (
    <div className="flex mt-3 gap-2">
      <p>Male</p>
      <input type="radio" name="gender" id="gender" checked={selgen==="male"} onChange={()=>onchange("male")}/>
      <p>Female</p>
      <input type="radio" name="gender" id="gender" checked={selgen==="female"} onChange={()=>onchange("female")} />
    </div>
  );
};
