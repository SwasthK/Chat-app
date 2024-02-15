import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthcontextProvider } from "./context/usercontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthcontextProvider>
    <App />
  </AuthcontextProvider>
);
