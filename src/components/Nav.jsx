import React from 'react';
import NavTab from './NavTab';

function Nav(){

  return (
    <div className="nav-tabs">
      <NavTab name="Move" />
      <NavTab name="Scoreboard" />
      <NavTab name="Episodes" />
      <NavTab name="Rules" />
      <NavTab name="Admin" />

      <style jsx>{`
        .nav-tabs {
          display: flex;
          justify-content: center;
        }
    `}</style>
    </div>
  );
}

export default Nav;
