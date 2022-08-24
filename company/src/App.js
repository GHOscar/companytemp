import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import { useEffect, useState } from 'react';

function App() {

  const [auth, setAuth] = useState(false)
  const [auth1, setAuth1] = useState(true)

  const isLoggedIn = async () => {
    try {
        const res = await fetch('/auth', {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include"
        })

        if(res.status === 200) {
          setAuth(true)
          setAuth1(false)
        }
        if(res.status === 400) {
          setAuth(false)
          setAuth1(true)
        }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    isLoggedIn()
  }, [])

  return (
    <>
      <Navbar auth={auth1} />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/service" element={<Services />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/login" element={<Login />} exact auth={auth1} />
        <Route path="/register" element={<Register />} exact auth={auth1} />
        <Route path="/dashboard" element={<Dashboard />} exact auth={auth} />
        <Route path="/logout" element={<Logout />} exact auth={auth} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
