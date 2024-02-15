import React, { lazy, useState } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/home";
import { useauthcontext } from "./context/usercontext";
// const Home = lazy(() => import("./pages/home/Home"));
// const Signup = lazy(() => import("./pages/signup/Signup"));
// const Signin = lazy(() => import("./pages/signin/signin"));

function App() {

  const { authstate } = useauthcontext();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={authstate ? <Home /> : <Navigate to="/signin"></Navigate>}
        ></Route>
        <Route
          path="/signup"
          element={authstate ? <Navigate to="/Home"></Navigate> : <Signup />}
        ></Route>
        <Route
          path="/signin"
          element={authstate ? <Navigate to="/Home"></Navigate> : <Signin />}
        ></Route>
      </Routes>
      <Toaster></Toaster>
    </BrowserRouter>
  );
}

export default App;
