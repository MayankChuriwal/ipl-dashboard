import './App.scss';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import { HomePage } from './pages/HomePage';
import {NavBar} from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teams/:teamName" element={<TeamPage />} />
          <Route path="/teams/:teamName/matches/:year" element={<MatchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
