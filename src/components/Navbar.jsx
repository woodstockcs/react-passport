const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Moxie's App</span>
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
    </div>
  );
};

export default Navbar;
