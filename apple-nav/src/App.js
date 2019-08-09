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
          <NavLink to= "/categories/1"> iPad </NavLink>
          <NavLink to= "/categories/2"> iPhone </NavLink>
          <NavLink to= "/categories/3"> Mac </NavLink>
          <NavLink to= "/categories/4"> Music </NavLink>
          <NavLink to= "/categories/5"> TV </NavLink>
          <NavLink to= "/categories/6"> Watch </NavLink>
          <NavLink to= "/support"> Support </NavLink>
        </div>
        <Route exact path = "/" component={Home}/>
        <Route path="/categories/:id" render={props => <CategoryPage{...props}categories = {categories}/>} />
    </div>
  );
}

export default App;
