import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Saved Books
      </a>
      <a className="navbar-brand" href="/search">
        Search Books
      </a>
    </nav>
  );
}

export default Nav;
