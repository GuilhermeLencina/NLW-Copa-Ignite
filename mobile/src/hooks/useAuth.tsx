import { useContext } from "react";
import { AuthContext, AuthContextDataProps } from "../contexts/AuthContext";

export function useAuth(): AuthContextDataProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Cannot use "useAuth" outside AuthContextProvider')
  }

  return context;
}