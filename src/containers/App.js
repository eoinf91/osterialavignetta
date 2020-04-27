import React from 'react';
import './App.css';

// Components
import Header from "../components/Header/Header.component";
import BgFade from '../components/BgFade/BgFade.component';
import HeaderImageGrid from '../components/HeaderImageGrid/HeaderImageGrid.component';
import Welcome from '../components/Welcome/Welcome.component';
import Team from '../components/Team/Team.component';
import Menu from '../components/Menu/Menu.component';
import Contact from '../components/Contact/Contact.component';
import Footer from '../components/Footer/Footer.component';

function App() {
  return (
    <div className="App">
      <Header />
      <BgFade />
      <HeaderImageGrid />
      <Welcome />
      <Team />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
