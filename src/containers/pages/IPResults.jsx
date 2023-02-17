import { useEffect, useState } from "react";
import { TwinSpin } from "react-cssfx-loading";
import { useParams } from "react-router-dom";
import { useIpContext } from "../../hooks/useIpContext";
import { useIpWhois } from "../../hooks/useIpWhois";

const IPResults = () => {
  const { ip } = useParams();
  const [data, Setdata] = useState();
  const { isLoading, error, findIpWhois } = useIpWhois();
  const { ipData } = useIpContext();

  useEffect(() => {
    findIpWhois(ip);
  }, [ip]);

  if (ipData && !isLoading) {
    return (
      <div className="IPSearch">
        <h1 className="mt0 pt3 col-z">IP WHOIS</h1>
        <div className="RawD tl">
          <pre>
            {JSON.stringify(ipData, null, 3).replace(/[",{}+[\]]/g, "")}
          </pre>
        </div>
      </div>
    );
  } else {
    return (
      <div className="loading flex flex-column items-center w-100">
        <TwinSpin color="#000000" width="60px" height="60px" />
        <p>Loading.....</p>
      </div>
    );
  }
};

export default IPResults;
