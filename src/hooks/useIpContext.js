import { useContext } from "react";
import { ipContext } from "../contexts/ipContext";

export const useIpContext = () => {
  const context = useContext(ipContext);

  if (!context) {
    throw Error("useWhoisContext must be used within a whoisContext Provider");
  }

  return context;
};
