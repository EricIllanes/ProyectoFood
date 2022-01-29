import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing/landingPage";
import SearchRecipe from './components/searchRecipe/searchRecipe';
import CreatedRecipe from './components/createRecipe/createRecipe';
import NavBar from './components/navBar/navBar';
import Recipes from './components/Recipes/Recipes';
import Order from './components/orderRecipes/orderRecipes';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/home" element={<SearchRecipe />} />
            <Route path="/createrecipe" element={<CreatedRecipe />} />
          </Routes>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
