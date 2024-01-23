import React from 'react';

export function NavBar() {
  return (
    <div className="nav-bar">
      <div className="app-name">
        <span className="lets">LETS</span>
        <span className="parlay">PARLAY</span>
      </div>
      <div className="nav-bar-buttons">
        <button className="login">LOGIN</button>
        <button className="join-now">JOIN NOW</button>
      </div>
    </div>
  );
}
