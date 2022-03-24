import SoaSection from "../../containers/dnsContainer/SoaSection";

const SoaResult = ({ info }) => {
  const keys = Object.keys(info);
  const soa = keys[0];
  return (
    <div className="soa_body">
      <h2> SOA Records</h2>
      <p className="ns_heading">{`The Nameserver ${soa} sent the following SOA Records:`}</p>
      <SoaSection info={info[soa]} soaName={soa} />
    </div>
  );
};

export default SoaResult;
