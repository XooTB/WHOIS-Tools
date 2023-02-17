import "../../styles/whois.css";
import Registrar from "../../components/Registrar";
import Admin from "../../components/Admin";
import RD from "../../components/RawData";
import { createContext, useEffect, useState } from "react";
import Otherinfo from "../../components/Otherinfo";
import { useParams } from "react-router-dom";
import { TwinSpin } from "react-cssfx-loading";
import { useWhois } from "../../hooks/useWhois";

// Context Imports

export const dataContext = createContext();

const WhoisResults = () => {
  const { domain } = useParams();
  const { isLoading, findWhois, error } = useWhois();

  useEffect(() => {
    findWhois(domain);
  }, []);

  return (
    <div className="w-100">
      {/* If Loading */}
      {isLoading && (
        <div className="loading flex flex-column items-center w-100">
          <TwinSpin color="#000000" width="60px" height="60px" />
          <p>Loading.....</p>
        </div>
      )}
      {/* // If not Loading */}
      {!isLoading && !error && (
        <div className="whois">
          <div className="main">
            <div className="info">
              <Registrar />
              <Admin />
              <Otherinfo />
            </div>
            <RD />
          </div>
        </div>
      )}
    </div>
  );

  // }
};

export default WhoisResults;
