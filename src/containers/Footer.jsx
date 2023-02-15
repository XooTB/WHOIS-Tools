import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer pa2">
      <ul className="list">
        <li className="">
          <Link to="/" className="link pa3 col-x">
            Transfer
          </Link>
          <Link to="/" className="link pa3 col-x">
            Domain Purchase
          </Link>
          <Link to="/" className="link pa3 col-x">
            Transfers
          </Link>
          <Link to="/" className="link pa3 col-x">
            Transfers
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
