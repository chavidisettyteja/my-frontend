import logo from './logo.svg';
import './App.css';
import Brochers from './components/Brochers';
import Bigbrocher from './components/Bigbrocher';
import AdminPage from './components/AdminPage';
import Admin from './components/Admin';
import { Route, Routes } from 'react-router-dom';
import MainHome from './components/MainHome';
 import Navbar from "./components/Navbar"
import Builders from './components/Builders';
import SubNavbar from './components/SubNavbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
  //  <Navbar/>
  // <Brochers/>
  // <Bigbrocher/>
  // <AdminPage/>
  <Routes>
  <Route path='/' element={<MainHome />} />
  <Route path="/adminPage" element={<AdminDashboard />} />

  <Route path='/admin' element={<Admin />} />
  {/* <Route path='/adminpage' element={<AdminPage />} /> */}
</Routes>

  // <Admin />
  );
}

export default App;

