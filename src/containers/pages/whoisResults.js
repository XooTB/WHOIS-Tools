import "../../styles/whois.css";
import Registrar from "../../components/info";
import Admin from "../../components/NameServer";
import RD from "../../components/RawData";
import { createContext, useEffect, useState } from "react";
import Otherinfo from "../../components/Otherinfo";
import { useParams } from "react-router-dom";
import Twinspin from "react-cssfx-loading/lib/TwinSpin";
export const dataContext = createContext();

const WhoisResults = () => {
  const { domain } = useParams();
  const [Data, SetData] = useState();

  useEffect(() => {
    fetch(`https://tools.purpleit.com/api/whois/${domain}`)
      .then((data) => data.json())
      .then((info) => {
        SetData(info[Object.keys(info)[1]]);
      });
  }, [domain]);

  if (Data) {
    return (
      <div className="whois">
        <dataContext.Provider value={[Data]}>
          <div className="main">
            <div className="info">
              <Registrar />
              {/* <DomainInfo /> */}
              <Admin />
              <Otherinfo />
            </div>
            <RD />
          </div>
        </dataContext.Provider>
      </div>
    );
  } else {
    return (
      <div className="top_body">
        <div className="loading">
          <Twinspin color="#00000" width="50px" height="50px" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }
};

export default WhoisResults;
