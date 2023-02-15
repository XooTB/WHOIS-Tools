import DnsRow from "./DnsRow";

const ParentInfo = ({ obj }) => {
  const data = obj;
  const results = data.map((item, i) => {
    return <DnsRow info={item} key={i} />;
  });
  return (
    <div className="parentBody">
      <h2>Parent NS Tests</h2>
      <div className="flex top_title">
        <div className="dns_row name">Name</div>
        <div className="dns_row ip">IP</div>
        <div className="dns_row glue">GLUE</div>
        <div className="dns_row tll">TTL</div>
        <div className="dns_row family">IP Family</div>
        <div className="dns_row type">Type</div>
      </div>
      <div>{results}</div>
    </div>
  );
};

export default ParentInfo;
