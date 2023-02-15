const DnsRow = ({ info }) => {
  const glue = () => {
    if (info.glue) {
      return "✅";
    } else {
      return "❌";
    }
  };
  return (
    <div className="flex">
      <div className="dns_row name">{info.name}</div>
      <div className="dns_row ip">{info.ip.address}</div>
      <div className="dns_row glue">{glue()}</div>
      <div className="dns_row tll">{info.ttl}</div>
      <div className="dns_row family">IPv {info.ip.family}</div>
      <div className="dns_row type">{info.type}</div>
    </div>
  );
};

export default DnsRow;
