const MxRecord = ({ info, mxName }) => {
  if (info) {
    return (
      <div className="mx_body">
        <div className="mx_head">
          <div className="mx_row name">name:</div>
          <div className="mx_row ttl">TTL:</div>
          <div className="mx_row priority">Priority:</div>
          <div className="mx_row server">Server:</div>
        </div>
        <div className="mx_info">
          <div className="mx_row name">{info.name}</div>
          <div className="mx_row ttl">{info.ttl}</div>
          <div className="mx_row priority">{info.priority}</div>
          <div className="mx_row server">{info.server}</div>
        </div>{" "}
      </div>
    );
  } else {
    return (
      <div>
        <p className="ns_heading">{`The NameServer "${mxName}" didn't send any MX Records `}</p>
      </div>
    );
  }
};

export default MxRecord;
