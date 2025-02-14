import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <h1>MTG Kartenmanager</h1>
      <nav>
        <a href="/">Home </a>
        <a href="/add-card">Karte hinzufügen</a>
      </nav>
    </header>
  );
};

export default Header;

//!React Router verwenden, um die Links (<a href="/">) durch <Link>-Komponenten zu ersetzen.
