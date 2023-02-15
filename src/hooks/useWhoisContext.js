import { whoisContext } from "../contexts/whoisContext";
import { useContext } from "react";

export const useWhoisContext = () => {
  const context = useContext(whoisContext);

  if (!context) {
    throw Error("useWhoisContext must be used within a whoisContext Provider");
  }

  return context;
};
