import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ParentInfo from "../../components/dnsComponents/ParentInfo";
import NSInfo from "../dnsContainer/NSInfo";
import SoaResult from "../../components/dnsComponents/SoaResult";
import MxSection from "../dnsContainer/MxSection";
import WWWSection from "../dnsContainer/WWWSection";
import Twinspin from "react-cssfx-loading/lib/TwinSpin";

import "../../styles/dns.css";

const DnsResults = () => {
  const { domain } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`API`)
      .then((data) => data.json())
      .then((info) => setData(info));
  }, [domain]);

  if (data) {
    return (
      <div className="top_body">
        <ParentInfo obj={data.parent} />
        <NSInfo info={data.nameServer} />
        <SoaResult info={data.Soa} />
        <MxSection info={data.mx} />
        <WWWSection info={data.www} />
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

export default DnsResults;
