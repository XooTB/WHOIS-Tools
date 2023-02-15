import { createContext, useReducer, useState } from "react";

export const whoisContext = createContext();

export const WhoisProvider = ({ children }) => {
  const [whoisData, setWhoisData] = useState();

  return (
    <whoisContext.Provider value={{ whoisData, setWhoisData }}>
      {children}
    </whoisContext.Provider>
  );
};
