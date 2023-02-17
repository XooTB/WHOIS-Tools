import { createContext, useState } from "react";

export const clientIpContext = createContext();

export const ClientIpProvider = ({ children }) => {
  const [clientIpData, setClientIpData] = useState();

  return (
    <clientIpContext.Provider value={{ clientIpData, setClientIpData }}>
      {children}
    </clientIpContext.Provider>
  );
};
