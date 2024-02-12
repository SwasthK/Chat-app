import React from "react";
import { Topbar } from "./Topbar";
import { Sent } from "./Sent";
import { Recieve } from "./Recieve";
import { Inputmsg } from "./Inputmsg";
export const Messages = () => {
  return (
    <div className="flex flex-col ml-10 w-full">
      <Topbar></Topbar>
      <div className="overflow-auto h-96 border-2 mt-4">
        <Sent></Sent>
        <Sent></Sent>
        <Recieve></Recieve>
        <Recieve></Recieve>
        <Recieve></Recieve>
        <Recieve></Recieve>
        <Recieve></Recieve>
        <Recieve></Recieve>
      </div>
      <Inputmsg></Inputmsg>
    </div>
  );
};
