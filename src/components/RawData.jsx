import { useEffect, useState } from "react";
import { dataContext } from "../containers/pages/whoisResults";
import { useWhoisContext } from "../hooks/useWhoisContext";
const RawData = () => {
  const { whoisData } = useWhoisContext();
  const [info, Setinfo] = useState(" ");

  useEffect(() => {
    const XD = `${JSON.stringify(whoisData, null, 2)}`;
    const data = XD.replace(/[",{}+[\]]/g, "");
    Setinfo(data);
  }, [whoisData]);

  return (
    <div className="RawData tl">
      <h1 className="tc">Raw Whois Data</h1>
      <pre className="Pre">{info}</pre>
    </div>
  );
};

export default RawData;
