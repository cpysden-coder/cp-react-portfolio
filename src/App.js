import React, {useState} from "react";
import logo from './logo.svg';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Profile from './components/Profile';
import Nav from './components/Nav';

import './components/Header'
import './components/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from './components/Portfolio';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom"
import Contact from "./components/Pages/Contact";
import Pages from "./components/Pages"
import './App.css';


function App() {

  const [pages] = useState([
    {
      name: "Contact"
    },
    {
      name: "About-Me"
    },
    {
      name: "Portfolio"
    }
  ])

  const [currentPage, setCurrentPage] = useState(pages[1])

  return (
    <div className="App">
      <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Hero />
      <Pages currentPage={currentPage}/>
      
    </div>
  );

}

export default App;
