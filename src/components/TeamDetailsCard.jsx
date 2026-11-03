import React from 'react';

function TeamDetailsCard({ selectedTeam, onSetFavorite, favoriteTeam }) {
  if (!selectedTeam) {
    return (
      <div className="d-flex align-items-center justify-content-center h-100 flex-grow-1 bg-white">
        <h4 className="text-muted">Select a team to view details</h4>
      </div>
    );
  }

  const isFavorite = favoriteTeam && favoriteTeam.id === selectedTeam.id;

  return (
    <div className="d-flex align-items-center justify-content-center h-100 flex-grow-1 p-4 bg-white">
      <div className="card shadow-lg border-0 p-4" style={{ width: '100%', maxWidth: '650px' }}>
        <div className="text-center mb-4">
          <img 
            src={selectedTeam.logo} 
            alt={selectedTeam.name} 
            style={{ height: '120px', objectFit: 'contain' }} 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://via.placeholder.com/120/0d6efd/ffffff?text=${selectedTeam.name.split(' ').map(n=>n[0]).join('')}`;
            }}
          />
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="card-title fw-bold text-dark fs-3 m-0">
              {selectedTeam.name}
            </h2>
            <button 
              className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'} btn-sm fw-bold px-3`}
              onClick={() => onSetFavorite(selectedTeam)}
            >
              {isFavorite ? '★ Favorite Team' : '☆ Mark as Favorite'}
            </button>
          </div>
          <hr />
          <p className="mb-2"><strong>City:</strong> {selectedTeam.city}</p>
          <p className="mb-2"><strong>Captain:</strong> {selectedTeam.captain}</p>
          <p className="mb-2"><strong>Home Ground:</strong> {selectedTeam.homeGround}</p>
          <p className="mb-3"><strong>Championships:</strong> {selectedTeam.championships}</p>
          <p className="text-secondary" style={{ lineHeight: '1.6' }}>
            {selectedTeam.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamDetailsCard;