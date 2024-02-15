import React from "react";
import { Searchbar } from "./Searchbar";
import { Conversation } from "./Conversation";
import { Logout } from "./Logout";
export const Sidebar = () => {
  return (
    <div>
      <Searchbar></Searchbar>
      <hr className="mt-4 w-full" />
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
      <Logout></Logout>
    </div>
  );
};
