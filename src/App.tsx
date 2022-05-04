import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Sidebar } from "./component/index"
import { Home, Login, Signup } from "./page/index"
import './App.css';




function App() {

  const { pathname } = useLocation()

  const SideMenu = () => {
    if (pathname !== "/login" && pathname !== "/signup") {
      return <Sidebar />
    }
    return null
  }

  return (
    <div className="App">
      <SideMenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
