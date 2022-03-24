const { Link } = require("react-router-dom");

const Navbar = () => {
  return (
    <div className="Nav">
      <Link to="/" className="link">
        <h1 className="logo">Purple IT</h1>
      </Link>
      <ul className="list flex ma0 pa2 bg-x">
        <li className="pa2 ma1 ">
          <Link to="/" className="link col-x">
            Home
          </Link>
        </li>
        <li className="pa2 ma1 ">
          <Link to="/whois" className="link col-x">
            WHOIS
          </Link>
        </li>
        <li className="pa2 ma1 ">
          <Link to="ipsearch" className="link col-x">
            IP WHOIS
          </Link>
        </li>
        <li className="pa2 ma1 ">
          <Link to="/myip" className="link col-x">
            My IP
          </Link>
        </li>
        <li className="pa2 ma1 ">
          <Link to="/dnsinfo" className="link col-x">
            DNSinfo
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
