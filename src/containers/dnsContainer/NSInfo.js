import NSSection from "./NSSection";

const NSInfo = ({ info }) => {
  const keys = Object.keys(info);
  const ns = keys[0];
  return (
    <div className="parentBody">
      <h2>NameServer Records</h2>
      
      <div>
        <NSSection info={info[ns]} nsName={ns} />
      </div>
    </div>
  );
};

export default NSInfo;
