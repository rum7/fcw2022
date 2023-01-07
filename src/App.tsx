import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header';

import Home from './views/Home/Home';
import Teams from './views/Teams/Teams';
import Team from './views/Team/Team';
import Groups from './views/Groups/Groups';
import Matches from './views/Matches/Matches';
import NotFound from './views/NotFound/NotFound';

import Footer from './components/Footer/Footer'

import './App.scss'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="teams" element={<Teams />} />
          <Route path="teams/:name" element={<Team />} />
          <Route path="groups" element={<Groups />} />
          <Route path="matches" element={<Matches />} />
          <Route path="*" element={<NotFound />} />
        </Routes>      
      </div>
      <Footer />
    </>
  );
}

export default App;
