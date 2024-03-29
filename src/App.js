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
import Signup from './components/pages/Sign-up'
import VideoPage from './components/pages/SampleVIdeo/VideoPage'


function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/video" element={<Video />} />
          <Route path="/video/:id" render={(props) => {
            return <VideoPage {...props} />;
          }} />

          <Route exact path="/music" element={<Music />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/bugreport" element={<BugReport />} />
          <Route exact path="/feedback" element={<Feedback />} />
          <Route exact path="/Signup" element={<Signup />} />
          {/* Add more routes for other pages if needed */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;