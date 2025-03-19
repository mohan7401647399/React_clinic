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
    <div className="App">
      <Navbar />
      <Signup />
      <Login />
      <ForgotPassword />
      <HomePage />
      <PatientPage />
      <Footer />
    </div>
  );
}

export default App;
