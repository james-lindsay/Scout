import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <nav className="nav__container">
        <a className="nav__home" href="Home">
          Home
        </a>
        <a className="nav__clubs" href="Home">
          Clubs
        </a>
        <a className="nav__footballers" href="Home">
          Footballers
        </a>
      </nav>
    </div>
  );
};

export default Nav;
