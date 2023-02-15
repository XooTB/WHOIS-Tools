import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IPResults = () => {
  const { ip } = useParams();
  const [data, Setdata] = useState();

  useEffect(() => {
    fetch(process.env.REACT_APP_API + `whois/${ip}`)
      .then((data) => data.json())
      .then((info) => JSON.stringify(info, null, 3))
      .then((info) => Setdata(info.replace(/[",{}+[\]]/g, "")));
  }, [ip]);
  if (data) {
    return (
      <div className="IPSearch">
        <h1 className="mt0 pt3 col-z">IP WHOIS</h1>
        <div className="RawD tl">
          <pre>{data}</pre>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default IPResults;
