import { useEffect } from "react";
import { Rowx } from "../../components/Rows";
import { useClientIpContext } from "../../hooks/useClientIpContext";
import { useClientIpInfo } from "../../hooks/useClientIpInfo";
import { TwinSpin } from "react-cssfx-loading";

const MyIP = () => {
  const { isLoading, error, getClientIpData } = useClientIpInfo();
  const { clientIpData } = useClientIpContext();

  useEffect(() => {
    getClientIpData();
  }, []);

  if (clientIpData && !isLoading) {
    return (
      <div className="tc position-x info-body">
        <h1 className="head">Current Ip Address is "{clientIpData.query}"</h1>
        <div className="table">
          <Rowx lable="Public IP:" data={clientIpData.query} />
          <Rowx lable="Country:" data={clientIpData.country} />
          <Rowx lable="Country Code:" data={clientIpData.countryCode} />
          <Rowx lable="Region:" data={clientIpData.region} />
          <Rowx lable="Region Name:" data={clientIpData.regionName} />
          <Rowx lable="City:" data={clientIpData.city} />
          <Rowx lable="Zip:" data={clientIpData.zip} />
          <Rowx lable="Lat:" data={clientIpData.lat} />
          <Rowx lable="Lon:" data={clientIpData.lon} />
          <Rowx lable="Timezone:" data={clientIpData.timezone} />
          <Rowx lable="Isp:" data={clientIpData.isp} />
          <Rowx lable="Org:" data={clientIpData.org} />
          <Rowx lable="AS:" data={clientIpData.as} />
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

export default MyIP;
