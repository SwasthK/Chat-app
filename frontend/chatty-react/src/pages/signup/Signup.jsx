import React from "react";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Checkbox } from "../../components/Form/Checkbox";

import useSignup from "../../hooks/usesignup";

const signup = () => {
  const { loading, sign } = useSignup();

  const [val, setval] = useState({
    fullname: "",
    username: "",
    password: "",
    cpassword: "",
    gender: "",
  });

  const handlesub = async (e) => {
    e.preventDefault();
    await sign(val);
  };

  const setgender = (gen) => {
    setval({ ...val, gender: gen });
  };

  return (
    <form onSubmit={handlesub}>
      <div className="max-w-sm mx-auto mt-10 border-2 p-6 rounded-lg flex flex-col">
        <h1 className="text-center text-2xl font-bold mb-5">Signup</h1>
        <Input
          placeholder="your fullname"
          id="fullname"
          onchange={(e) => setval({ ...val, fullname: e.target.value })}
        ></Input>
        <Input
          placeholder="your username"
          id="username"
          onchange={(e) => setval({ ...val, username: e.target.value })}
        ></Input>
        <Input
          placeholder="your password"
          id="password"
          onchange={(e) => setval({ ...val, password: e.target.value })}
        ></Input>
        <Input
          placeholder="confirm password"
          id="cpassword"
          onchange={(e) => setval({ ...val, cpassword: e.target.value })}
        ></Input>
        <Checkbox selgen={val.gender} onchange={setgender}></Checkbox>
        <Link
          to={"/signin"}
          className="font-normal text-blue-600 hover:underline"
        >
          already logged? please login
        </Link>
        <Button text="signup"></Button>
      </div>
    </form>
  );
};

export default signup;
