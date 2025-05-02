import { useState } from "react";

import { registerRequest } from "../api/auth";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (values) => {
    try {
      const res = await registerRequest(values);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, isAuthenticated, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
