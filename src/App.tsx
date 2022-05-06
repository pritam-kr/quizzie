import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Sidebar } from "./component/index"
import { Home, Login, Signup, Rules } from "./page/index"
import './App.css';
import { Toaster } from 'react-hot-toast';
import { PrivateRoute } from './route/PrivateRoute';

  


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
        <Route path="/rule" element={<PrivateRoute> <Rules /> </PrivateRoute>} />
      </Routes>
      <Toaster position={"top-right"} />
    </div>
  );
}

export default App;
