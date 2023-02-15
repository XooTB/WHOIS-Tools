import { Row } from "./Rows";
import { useWhoisContext } from "../hooks/useWhoisContext";

const Registrar = () => {
  const { whoisData } = useWhoisContext();
  let Status = "";
  if (whoisData) {
    Status = whoisData["Domain Status"].map((i) => {
      return (
        <div className="tl pb2" key={i}>
          {i}
        </div>
      );
    });
  }
  return (
    <div>
      {whoisData && (
        <div>
          <div className="domaininfo">
            <h1 className="domain-header">Registrar Info</h1>
            <Row Id="Name" Data={whoisData.Registrar} />
            <Row Id="Whois Server" Data={whoisData["Registrar WHOIS Server"]} />
            <Row Id="Referral URL" Data={whoisData["Registrar URL"]} />
            <Row Id="Status" Data={Status} />
          </div>

          <div className="domaininfo">
            <h1 className="domain-header">Important Dates</h1>
            <Row Id="Expires On" Data={whoisData["Expiry Date"]} />
            <Row Id="Registered On" Data={whoisData["Created Date"]} />
            <Row Id="Updated On" Data={whoisData["Updated Date"]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Registrar;
