import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home'
import History from './components/pages/History'
import Video from './components/pages/Video'
import Music from './components/pages/Music'
import Settings from './components/pages/Settings'
import BugReport from './components/pages/ReportBugs'
import Feedback from './components/pages/Feedback'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Registration/Sign-up'
import Login from './components/Registration/Login'
import ForgetPassword from './components/Registration/ForgetPassword';



function App() {

  return (
    <div className="app">
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/video/:id" element={<Video />} />
          {/* Route for individual video pages */}
          <Route exact path="/music" element={<Music />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/bugreport" element={<BugReport />} />
          <Route exact path="/feedback" element={<Feedback />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/ForgetPassword" element={<ForgetPassword />} />
          {/* Add more routes for other pages if needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
