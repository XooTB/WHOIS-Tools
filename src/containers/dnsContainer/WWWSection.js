const WWWSection = ({ info }) => {
  const results = info.map((item, i) => {
    return (
      <div className="w_row" key={i}>
        <div className="w_col name">{item.domain}</div>
        <div className="w_col name">{item.ttl}</div>
        <div className="w_col name">{item.class}</div>
        <div className="w_col name">{item.type}</div>
        <div className="w_col name">{item.value}</div>
      </div>
    );
  });
  return (
    <div className="w_body">
      <h2 className="heading"> WWW Records</h2>
      <div className="w_row top">
        <div className="w_col name">Name</div>
        <div className="w_col name">TTL</div>
        <div className="w_col name">Class</div>
        <div className="w_col name">Type</div>
        <div className="w_col name">Value</div>
      </div>
      {results}
    </div>
  );
};

export default WWWSection;
