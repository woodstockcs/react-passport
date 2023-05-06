import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Moxie's App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src="https://images.pexels.com/photos/16129409/pexels-photo-16129409.jpeg"
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">Joe Doe</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link to="login">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
