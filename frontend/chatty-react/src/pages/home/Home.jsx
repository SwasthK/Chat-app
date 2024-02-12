import React from "react";
import { Sidebar } from "../../components/Msg/Sidebar";
import { Messages } from "../../components/Messages/Messages";
import { Nochat } from "./Nochat";
const Home = () => {
  const Nochats = true;
  return (
    <div className="flex mx-auto mt-10 max-w-4xl  border-2 p-3">
      <Sidebar></Sidebar>
      {Nochats ? <Nochat /> : <Messages />}
    </div>
  );
};

export default Home;
