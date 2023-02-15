import MxRecord from "../../components/dnsComponents/MxRecord";

const MxSection = ({ info }) => {
  const keys = Object.keys(info);
  const mx = keys[0];

  return (
    <div className="mx_section">
      <h2 className="heading"> MX Records</h2>
      <p className="ns_heading">{`The Nameserver ${mx} sent the following MX Records:`}</p>
      <MxRecord info={info[mx]} mxName={mx} />
    </div>
  );
};

export default MxSection;
