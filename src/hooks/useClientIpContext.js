import { useContext } from "react";
import { clientIpContext } from "../contexts/clientIpContext";

export const useClientIpContext = () => {
  const context = useContext(clientIpContext);

  if (!context) {
    throw Error("useWhoisContext must be used within a whoisContext Provider");
  }

  return context;
};
