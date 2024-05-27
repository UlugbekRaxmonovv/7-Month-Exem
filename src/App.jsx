import React from 'react';
import Wishlist from './pages/Wishlist/Wishlist'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login'
import Auth from './pages/Auth/Auth.jsx'
import Admin from './pages/Admin/Admin'
import NotFound from './pages/NotFound/NotFound'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home'
import Card from './pages/Card/Card.jsx'
import Revewies from './pages/Revewies/Revewies.jsx';
import Another from './pages/Another/Another.jsx';
import SingleRoute from './pages/SingleRoute/SingleRoute.jsx';
import { Route,Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reviews" element={<Revewies />} />
      <Route path="/another" element={<Another />} />
      <Route path="/wishlist/" element={<Wishlist />} />
      <Route path="/product/:id" element={<SingleRoute />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/card" element={< Card/>} />
      <Route path='/' element={<Auth/>}>
      <Route path='/admin' element={<Admin/>} />
    </Route>
    <Route path='*' element={<NotFound/>} />
    </Routes>
    </div>
  );
}

export default App;
