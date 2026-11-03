import React from 'react';

function NavbarComponent({ favoriteTeam }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-4 shadow-sm d-flex justify-content-between align-items-center" style={{ height: '60px' }}>
      <span className="navbar-brand mb-0 h1 fw-bold fs-4">
        IPL Team Explorer
      </span>
      {favoriteTeam && (
        <span className="text-warning fw-semibold fs-6">
         Favorite Team: {favoriteTeam.name}
        </span>
      )}
    </nav>
  );
}

export default NavbarComponent;