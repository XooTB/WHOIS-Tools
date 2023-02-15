import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ParentInfo from "../../components/dnsComponents/ParentInfo";
import NSInfo from "../dnsContainer/NSInfo";
import SoaResult from "../../components/dnsComponents/SoaResult";
import MxSection from "../dnsContainer/MxSection";
import WWWSection from "../dnsContainer/WWWSection";
import { TwinSpin } from "react-cssfx-loading";

import "../../styles/dns.css";

const DnsResults = () => {
  const { domain } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(process.env.REACT_APP_API + `dns/${domain}`)
      .then((data) => data.json())
      .then((info) => setData(info));
  }, [domain]);

  if (data) {
    console.log(data);
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
