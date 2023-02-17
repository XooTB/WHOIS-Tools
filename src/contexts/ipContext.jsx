import { createContext, useState } from "react";

export const ipContext = createContext();

export const IpProvider = ({ children }) => {
  const [ipData, setIpData] = useState();

  return (
    <ipContext.Provider value={{ ipData, setIpData }}>
      {children}
    </ipContext.Provider>
  );
};
