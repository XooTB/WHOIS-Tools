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
    <div>
      {/* If Loading */}
      {isLoading && (
        <div className="top_body">
          <div className="loading">
            <TwinSpin color="#00000" width="50px" height="50px" />
            <p>Loading...</p>
          </div>
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
