import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import ForgotPassword from './components/ForgotPassword';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PatientPage from './components/PatientPage';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/forgot-password" element={ <ForgotPassword /> } />
          <Route path="/patient" element={ <PatientPage /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;