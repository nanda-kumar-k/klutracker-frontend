import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import LoginTest from './components/LoginTest';
import UpdateProfile from './components/UpdateProfile';
import StudentHome from './components/StudentHome';
import Leaderboard from './components/Leaderboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/'  element={<Login/>} />
        <Route path='/updateprofile'  element={<UpdateProfile/>} exact/>
        <Route path='/leaderboard'  element={<Leaderboard/>} exact/>
        <Route path='/profile'  element={<StudentHome/>} exact/>
        <Route path='/gmail'  element={<LoginTest/>} exact/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
