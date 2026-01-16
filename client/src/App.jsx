import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import about from './pages/about.jsx';
import SignIn from './pages/Signin.jsx';
import SignOut from './pages/SignOut.jsx';
import Profile from './pages/Profile.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<about />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signout" element={<SignOut />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
  </BrowserRouter>
}
