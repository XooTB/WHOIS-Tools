const NsRow = ({ info }) => {
  //   console.log(info);
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
      <div className="dns_row ip">{info.ip}</div>
      <div className="dns_row glue">{glue()}</div>
      <div className="dns_row tll">{info.ttl}</div>
      <div className="dns_row type">{info.type}</div>
      <div className="dns_row family"></div>
    </div>
  );
};

export default NsRow;
