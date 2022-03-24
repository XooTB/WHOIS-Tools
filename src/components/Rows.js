import "../styles/row.css";

const Row = ({ Id, Data }) => {
  return (
    <div className="Row">
      <div className="ID">{Id} : </div> <div className="Data">{Data}</div>
    </div>
  );
};
const RawRow = ({ id, data }) => {
  return (
    <div className="Rawrow">
      <div className="id">{id} </div> <div className="data"> {data}</div>
    </div>
  );
};

const Rowx = ({ lable, data }) => {
  return (
    <div className="row-x">
      <div className="id">{lable}</div>
      <div className="data">{data}</div>
    </div>
  );
};

export { Row, RawRow, Rowx };
