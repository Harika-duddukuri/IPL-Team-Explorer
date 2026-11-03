import React from 'react';

function TeamSideBar({ iplTeams, onSelectTeam, selectedTeamId }) {
  return (
    <div 
      className="d-flex flex-column gap-3 p-3 bg-light border-end" 
      style={{ height: "100%", width: "35%", overflowY: "auto" }}
    >
      {iplTeams.map((team) => {
        const isSelected = selectedTeamId === team.id;
        return (
          <div
            key={team.id}
            className={`card shadow-sm border-0 ${isSelected ? 'border-primary border-2' : ''}`}
            style={{ cursor: "pointer", transition: "0.2s" }}
            onClick={() => onSelectTeam(team)}
          >
            <div className="card-body d-flex align-items-center gap-3 p-3">
              <img 
                src={team.logo} 
                alt={team.name} 
                style={{ width: "45px", height: "45px", objectFit: "contain" }} 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/50/0d6efd/ffffff?text=${team.name.split(' ').map(n=>n[0]).join('')}`;
                }}
              />
              <div>
                <h6 className="fw-bold m-0 text-dark">{team.name}</h6>
                <p className="text-muted m-0 small">{team.city}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TeamSideBar;