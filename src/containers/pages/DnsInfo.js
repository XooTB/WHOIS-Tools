import "../../styles/search.css";
import search_icon from "../../images/search.svg";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const DnsInfo = () => {
  const input = useRef(null);
  const navigate = useNavigate();
  const path = (e) => {
    e.preventDefault();
    const domain = input.current.value;
    navigate(`./${domain}`);
  };
  return (
    <div className="search_body">
      <h1 className="head"> DNS Info</h1>
      <form>
        <input
          ref={input}
          type="search"
          placeholder="Domain"
          name="input"
          className="src-box"
        />
        <input
          onClick={path}
          src={search_icon}
          alt="src-btn"
          className="src-icon"
          type="image"
        />
      </form>
    </div>
  );
};

export default DnsInfo;
