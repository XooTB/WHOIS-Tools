import { useEffect, useState } from "react";
import { Rowx } from "../../components/Rows";

const MyIP = () => {
  const [Deets, SetDeets] = useState();
  useEffect(() => {
    fetch(process.env.REACT_APP_API + 'myip/info')
      .then((data) => data.json())
      .then((info) => SetDeets(info));
  }, []);
  // console.log(Deets);
  if (Deets) {
    return (
      <div className="tc position-x info-body">
        <h1 className="head">Current Ip Address is "{Deets.query}"</h1>
        <div className="table">
          <Rowx lable="Public IP:" data={Deets.query} />
          <Rowx lable="Country:" data={Deets.country} />
          <Rowx lable="Country Code:" data={Deets.countryCode} />
          <Rowx lable="Region:" data={Deets.region} />
          <Rowx lable="Region Name:" data={Deets.regionName} />
          <Rowx lable="City:" data={Deets.city} />
          <Rowx lable="Zip:" data={Deets.zip} />
          <Rowx lable="Lat:" data={Deets.lat} />
          <Rowx lable="Lon:" data={Deets.lon} />
          <Rowx lable="Timezone:" data={Deets.timezone} />
          <Rowx lable="Isp:" data={Deets.isp} />
          <Rowx lable="Org:" data={Deets.org} />
          <Rowx lable="AS:" data={Deets.as} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default MyIP;
