import React,{useState} from 'react';
import { NavLink, Route} from "react-router-dom";
import Home from "./components/Home";
import CategoryPage from "./components/CategoryPage";

import data from "./components/data";

import './App.css';

function App() {
  const [categories, setCategories] = useState(data);
  return (
    <div className="App">
        <div className="navbar">
          <NavLink to= "/"> Home </NavLink>
          <NavLink to= "/ipad"> iPad </NavLink>
          <NavLink to= "/iphone"> iPhone </NavLink>
          <NavLink to= "/mac"> Mac </NavLink>
          <NavLink to= "/music"> Music </NavLink>
          <NavLink to= "/tv"> TV </NavLink>
          <NavLink to= "/watch"> Watch </NavLink>
          <NavLink to= "/support"> Support </NavLink>
        </div>
        <Route exact path = "/" component={Home}/>
        <Route path="/categories/:id" render={props => <CategoryPage{...props}categories = {categories}/>} />
    </div>
  );
}

export default App;
