import { useContext, useEffect, useState } from "react";
import { dataContext } from "../containers/pages/whoisResults";
const RD = () => {
  const RawData = useContext(dataContext);
  const [info, Setinfo] = useState(" ");

  useEffect(() => {
    const XD = `${JSON.stringify(RawData, null, 2)}`;
    const data = XD.replace(/[",{}+[\]]/g, "");
    Setinfo(data);
  }, [RawData]);

  return (
    <div className="RawData tl">
      <h1 className="tc">Raw Whois Data</h1>
      <pre className="Pre">{info}</pre>
    </div>
  );
};

export default RD;
