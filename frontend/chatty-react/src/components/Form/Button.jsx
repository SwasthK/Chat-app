import React from "react";

export const Button = ({ text, loading }) => {
  return (
    <input
      type="submit"
      value={loading ? "Loading..." : text}
      className="p-2 border-2 mt-2 bg-red-100 cursor-pointer rounded-lg"
      disabled={loading}
    />
  );
};
