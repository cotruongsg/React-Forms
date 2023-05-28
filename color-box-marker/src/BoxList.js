import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (objBox) => {
    setBoxes((boxes) => [...boxes, objBox]);
  };

  const remove = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  const boxComps = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      backgroundColor={box.backgroundColor}
      handleRemove={remove}
    />
  ));

  return (
    <div>
      <NewBoxForm createBox={addBox} />
      {boxComps}
    </div>
  );
}

export default BoxList;
