import NsRow from "../../components/dnsComponents/NsRow";

const NSSection = ({ info, nsName }) => {
  const result = info.map((item, i) => {
    return <NsRow info={item} key={i} />;
  });

  if (info.length > 0) {
    return (
      <div>
        <p className="ns_heading">{`The NameServer "${nsName}" sent the following NS Records: `}</p>
        <div className="flex top_title">
          <div className="dns_row name">Name</div>
          <div className="dns_row ip">IP</div>
          <div className="dns_row glue">GLUE</div>
          <div className="dns_row tll">TTL</div>
          <div className="dns_row type"></div>
          <div className="dns_row family"></div>
        </div>
        <div>{result}</div>
      </div>
    );
  } else {
    return (
      <div>
        <p className="ns_heading">{`The NameServer "${nsName}" didn't send any Name Server Records `}</p>
      </div>
    );
  }
};

export default NSSection;
