import { useNavigate } from "react-router-dom";
import search_icon from "../images/search.svg";
import "../styles/search.css";
import { useRef } from "react";

const Search = () => {
  const input = useRef(null);
  let navigate = useNavigate();
  // const [setDomain] = useContext(MainContext);

  const path = (e) => {
    e.preventDefault();
    const domain = input.current.value;
    if (parseFloat(domain)) {
      navigate(`/ipwhois/${domain}`);
    } else {
      navigate(`/whois/${domain}`);
    }
  };
  return (
    <div>
      <form>
        <input
          ref={input}
          type="search"
          placeholder="Domain or IP"
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

export default Search;
