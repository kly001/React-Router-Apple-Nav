import React from 'react';
import { NavLink} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React-Router-Apple-Nav Project</h1>
      <div className="navbar">
        <NavLink to= "/"> Home </NavLink>
        <NavLink to= "/ipad"> iPad </NavLink>
        <NavLink to= "/iphone"> iPhone </NavLink>
        <NavLink to= "/mac"> Mac </NavLink>
        <NavLink to= "/Music"> Music </NavLink>
        <NavLink to= "/tv"> TV </NavLink>
        <NavLink to= "/watch"> Watch </NavLink>
        <NavLink to= "/support"> Support </NavLink>
      </div>

    </div>
  );
}

export default App;
