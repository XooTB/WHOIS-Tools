import { Row } from "./Rows";
import { dataContext } from "../containers/pages/whoisResults";
import { useContext } from "react";

const Registrar = () => {
  const Data = useContext(dataContext);
  let Status = "";
  if (Data) {
    Status = Data[0]["Domain Status"].map((i) => {
      return (
        <div className="tl pb2" key={i}>
          {i}
        </div>
      );
    });
  }
  return (
    <div>
      <div className="domaininfo">
        <h1 className="domain-header">Registrar Info</h1>
        <Row Id="Name" Data={Data[0].Registrar} />
        <Row Id="Whois Server" Data={Data[0]["Registrar WHOIS Server"]} />
        <Row Id="Referral URL" Data={Data[0]["Registrar URL"]} />
        <Row Id="Status" Data={Status} />
      </div>
      <div className="domaininfo">
        <h1 className="domain-header">Important Dates</h1>
        {/* <Row Id="Domain" Data={Data[0]["Domain Name"]} />
    <Row Id="Registrar" Data={Data[0].Registrar} /> */}
        <Row Id="Expires On" Data={Data[0]["Expiry Date"]} />
        <Row Id="Registered On" Data={Data[0]["Created Date"]} />
        <Row Id="Updated On" Data={Data[0]["Updated Date"]} />
      </div>
    </div>
  );
};

export default Registrar;
