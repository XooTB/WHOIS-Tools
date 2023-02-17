import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer pa2">
      <ul className="list">
        <li className="">
          <Link to="/" className="link pa3 col-x">
            Made and maintined by Samiul Alim ©
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
