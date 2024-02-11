import React from "react";
import { Searchbar } from "./Searchbar";
import { Conversation } from "./Conversation";

export const Sidebar = () => {
  return (
    <div>
      <Searchbar></Searchbar>
      <hr className="mt-4 w-full"/>
      <div className="overflow-auto h-96">
      <Conversation></Conversation> 
      <Conversation></Conversation> 
      <Conversation></Conversation> 
      <Conversation></Conversation> 
      <Conversation></Conversation> 
      <Conversation></Conversation> 
      <Conversation></Conversation> 
      <Conversation></Conversation> 
      <Conversation></Conversation> 
      <Conversation></Conversation> 
      <Conversation></Conversation> 
      <Conversation></Conversation> 
      </div>
      <button className="px-4 mt-2 bg-sky-500 border-2 py-1 rounded-md">OUT</button>
    </div>
  );
};
