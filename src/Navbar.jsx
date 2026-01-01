const Navbar = ({ isLoggedIn, setIsLoggedIn, setPage }) => {

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setPage("home");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <span
          className="navbar-brand"
          style={{ cursor: "pointer" }}
          onClick={() => setPage("home")}
        >
          Portfall.io 
        </span>

        <ul className="navbar-nav ms-auto flex-row gap-2">
          <li className="nav-item">
            <button className="btn btn-link nav-link"
              onClick={() => setPage("home")}>
              Home
            </button>
          </li>

          {isLoggedIn && (
            <li className="nav-item">
              <button className="btn btn-link nav-link"
                onClick={() => setPage("portfolio")}>
                Portfolio
              </button>
            </li>
          )}

          <li className="nav-item">
            {isLoggedIn ? (
              <button className="btn btn-outline-light" onClick={logout}>
                Logout
              </button>
            ) : (
              <button
                className="btn btn-outline-light"
                onClick={() => setPage("login")}
              >
                Login
              </button>
            )}
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;