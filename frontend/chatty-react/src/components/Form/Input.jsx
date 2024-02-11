import React from "react";

export const Input = ({placeholder,id}) => {
  return (
    <>
      <label htmlFor={id} className="block mb-2 mt-2 text-sm font-medium text-black-900">{id}</label>
      <input type="text" placeholder={placeholder} className="py-1 px-4 w-full rounded-lg text-base-"/>
    </>
  );
};
