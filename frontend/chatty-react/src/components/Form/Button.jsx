import React from "react";

export const Button = ({text}) => {
  return (
    <input
      type="submit"
      value={text}
      className="p-2 border-2 mt-2 bg-red-100 cursor-pointer rounded-lg"
    />
  );
};
