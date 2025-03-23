import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import './App.css';
import Footer from './components/Footer';
import ForgotPassword from './components/ForgotPassword';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ConsultPage from './components/ConsultPage';
import Signup from './components/Signup';
import { ToastContainer } from "react-toastify";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/forgot-password" element={ <ForgotPassword /> } />
          <Route
            path="/user" element={ user ? <ConsultPage /> : <Navigate to="/login" /> }
          />
        </Routes>
        <Footer />
        {/* ToastContainer */ }
        <ToastContainer position="top-right" autoClose={ 3000 } hideProgressBar={ false } />
      </div>
    </Router>
  );
}

export default App;