import React from "react";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 border-2 p-6 rounded-lg flex flex-col">
      <h1 className="text-center text-2xl font-bold mb-5">Login</h1>
      <Input placeholder="your Name" id="username"></Input>
      <Input placeholder="your password" id="password"></Input>
      <Link to={'/signup'} className="font-normal text-blue-600 hover:underline">new user? please signup</Link>
      <Button text="login"></Button>
    </div>
  );
};

export default Signin;
