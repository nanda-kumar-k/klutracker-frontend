import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import LoginTest from './components/LoginTest';
import UpdateProfile from './components/UpdateProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/nandu'  element={<Login/>} exact/>
        <Route path='/updateprofile'  element={<UpdateProfile/>} exact/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
