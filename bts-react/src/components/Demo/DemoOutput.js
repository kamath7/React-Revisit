import React from "react";

const DemoOutput = (props) => {
  return (
    <div>
      <p>{props.show ? "Kams is lord" : "Nothing much"}</p>
    </div>
  );
};

export default React.memo(DemoOutput);
