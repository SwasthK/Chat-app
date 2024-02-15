import React from "react";
import useLogout from "../../hooks/logout";

export const Logout = () => {
  const { loading, logout } = useLogout();
  return (
    <>
      {!loading ? (
        <button
          className="px-4 mt-2 bg-sky-500 border-2 py-1 rounded-md"
          onClick={logout}
        >
          LOG OUT
        </button>
      ) : (
        <div>LOADING......</div>
      )}
    </>
  );
};
