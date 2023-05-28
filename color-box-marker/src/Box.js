import React from "react";

function Box({ id, handleRemove, width, height, backgroundColor = "blue" }) {
  const remove = () => handleRemove(id);
  return (
    <div className="mt-4">
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor,
        }}
      />
      <button className="btn btn-danger btn-sm mt-1" onClick={remove}>
        Remove The Box!
      </button>
    </div>
  );
}

export default Box;
