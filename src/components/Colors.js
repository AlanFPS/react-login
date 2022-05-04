import React from "react";

const Colors = () => {
  const [colorArr, setColorArr] = React.useState([]);

  return (
    <div>
      <h1>Create Colors</h1>

      <label>New Color</label>
      <input type="text" name="" />
    </div>
  );
};

export default Colors;
