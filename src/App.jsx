import React, { useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import TeamSideBar from './components/TeamBar';
import TeamDetailsCard from './components/TeamDetailsCard';
import './App.css';

function App() {
  const iplTeams = [
    {
      id: 1,
      name: "Mumbai Indians",
      city: "Mumbai",
      captain: "Hardik Pandya",
      homeGround: "Wankhede Stadium",
      championships: "5 Titles (2013, 2015, 2017, 2019, 2020)",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg",
      description: "Mumbai Indians is one of the most successful franchises in the tournament, known for their strong core and consistency."
    },
    {
      id: 2,
      name: "Chennai Super Kings",
      city: "Chennai",
      captain: "Ruturaj Gaikwad",
      homeGround: "M. A. Chidambaram Stadium",
      championships: "5 Titles (2010, 2011, 2018, 2021, 2023)",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg",
      description: "Chennai Super Kings are renowned for their tactical brilliance, immense fan following, and record number of playoff appearances."
    },
    {
      id: 3,
      name: "Royal Challengers Bengaluru",
      city: "Bengaluru",
      captain: "Faf du Plessis",
      homeGround: "M. Chinnaswamy Stadium",
      championships: "0 Titles",
      logo: "https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png",
      description: "RCB features some of the most aggressive and explosive batters in world cricket and boasts an incredibly passionate fanbase."
    },
    {
      id: 4,
      name: "Kolkata Knight Riders",
      city: "Kolkata",
      captain: "Shreyas Iyer",
      homeGround: "Eden Gardens",
      championships: "3 Titles (2012, 2014, 2024)",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg",
      description: "Kolkata Knight Riders are known for their fearless brand of cricket and electric atmosphere at Eden Gardens."
    },
    {
      id: 5,
      name: "Sunrisers Hyderabad",
      city: "Hyderabad",
      captain: "Pat Cummins",
      homeGround: "Rajiv Gandhi International Cricket Stadium",
      championships: "2 Titles (2016, 2024)",
      logo: "https://assets.ccbp.in/frontend/react-js/srh-logo-img.png",
      description: "Sunrisers Hyderabad are celebrated for possessing some of the most lethal bowling attacks and explosive batting line-ups."
    },
    {
      id: 6,
      name: "Delhi Capitals",
      city: "Delhi",
      captain: "Rishabh Pant",
      homeGround: "Arun Jaitley Stadium",
      championships: "0 Titles",
      logo: "https://assets.ccbp.in/frontend/react-js/dc-logo-img.png",
      description: "Delhi Capitals feature an energetic mix of young prodigies and experienced international stars."
    },
    {
      id: 7,
      name: "Punjab Kings",
      city: "Mohali",
      captain: "Shikhar Dhawan",
      homeGround: "PCA Stadium",
      championships: "0 Titles",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg",
      description: "Punjab Kings are known for playing an entertaining and high-risk brand of cricket."
    },
    {
      id: 8,
      name: "Rajasthan Royals",
      city: "Jaipur",
      captain: "Sanju Samson",
      homeGround: "Sawai Mansingh Stadium",
      championships: "1 Title (2008)",
      logo: "https://assets.ccbp.in/frontend/react-js/rr-logo-img.png",
      description: "Rajasthan Royals famously won the inaugural edition of the tournament under the leadership of Shane Warne."
    },
    {
      id: 9,
      name: "Gujarat Titans",
      city: "Ahmedabad",
      captain: "Shubman Gill",
      homeGround: "Narendra Modi Stadium",
      championships: "1 Title (2022)",
      logo: "https://assets.ccbp.in/frontend/react-js/gt-logo-img.png",
      description: "Gujarat Titans made an immediate impact upon entering the league with disciplined composure and strategic execution."
    },
    {
      id: 10,
      name: "Lucknow Super Giants",
      city: "Lucknow",
      captain: "KL Rahul",
      homeGround: "BRSABV Ekana Cricket Stadium",
      championships: "0 Titles",
      logo: "https://assets.ccbp.in/frontend/react-js/lsg-logo-img.png",
      description: "Lucknow Super Giants bring a balanced squad with reliable all-rounders and a competitive edge."
    }
  ];

  const [selectedTeam, setSelectedTeam] = useState(null);
  const [favoriteTeam, setFavoriteTeam] = useState(null);

  const handleSelectTeam = (team) => {
    setSelectedTeam(team);
  };

  const handleSetFavorite = (team) => {
    setFavoriteTeam(team);
  };

  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }} className="d-flex flex-column m-0 p-0">
      <NavbarComponent favoriteTeam={favoriteTeam} />
      <div className="d-flex flex-grow-1" style={{ height: 'calc(100vh - 60px)', overflow: 'hidden' }}>
        <TeamSideBar 
          iplTeams={iplTeams} 
          onSelectTeam={handleSelectTeam} 
          selectedTeamId={selectedTeam?.id} 
        />
        <TeamDetailsCard 
          selectedTeam={selectedTeam} 
          onSetFavorite={handleSetFavorite} 
          favoriteTeam={favoriteTeam} 
        />
      </div>
    </div>
  );
}

export default App;