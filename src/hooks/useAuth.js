import { useContext } from "react";
import { authContext } from "../context/AuthContext";

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth harus dipakai di dalam <AuthProvider>");
  }
  return context;
};