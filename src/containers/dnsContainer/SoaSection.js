const SoaSection = ({ info, soaName }) => {
  const fields = [
    "MasterNamserver :",
    "Hostmaster E-Mail Address :",
    "Serial #: ",
    "Refresh :",
    "Retry : ",
    "Expire :",
    "Default TTL: ",
  ];
  const keys = Object.keys(info);
  const results = fields.map((field, i) => {
    return (
      <div className="soa_row" key={i}>
        <div className="soa_field"> {field} </div>
        <div className="soa_value">{info[keys[i]]}</div>
      </div>
    );
  });
  if (info) {
    return (
      <div>
        <div className="soa_row soa_title">
          <div className="soa_field">Field</div> 
          <div className="soa_value">Value</div>
        </div>
        {results}
      </div>
    );
  } else {
    return (
      <div>
        <p className="ns_heading">{`The NameServer "${soaName}" didn't send any SOA Records `}</p>
      </div>
    );
  }
};

export default SoaSection;
