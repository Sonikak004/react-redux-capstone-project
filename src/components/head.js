import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Country Explorer</h1>
      </div>
      <div className="header-right">
        <button type="button" className="icon-button">
          <i className="fas fa-microphone" />
        </button>
        <button type="button" className="icon-button">
          <i className="fas fa-cog" />
        </button>
      </div>
    </header>
  );
}

export default Header;
