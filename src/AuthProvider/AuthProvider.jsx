import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // const baseUrl = "http://localhost:5000";
  const baseUrl = "https://coffe-shop-server-mocha.vercel.app";

  const successfullToast = (text) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: text,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const authInfo = {
    baseUrl,
    successfullToast,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
