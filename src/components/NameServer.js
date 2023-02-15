import { dataContext } from "../containers/pages/whoisResults";
import { useContext } from "react";

const Admin = () => {
  const Data = useContext(dataContext);
  let Servs = "";
  if (Data) {
    Servs = Data[0]["Name Server"].map((i) => {
      return (
        <div className="tl pl4 pb3" key={i}>
          {i}
        </div>
      );
    });
  }
  return (
    <div className="domaininfo">
      <h1 className="domain-header">Name Servers</h1>
      {Servs}
    </div>
  );
};

export default Admin;
