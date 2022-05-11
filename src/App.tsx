import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Sidebar } from "./component/index"
import { Home, Login, Signup, Rules, ProfilePage, Question,Result, Board } from "./page/index"
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
        <Route path='/quiz-category' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/rule/:category" element={<PrivateRoute> <Rules /> </PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="/question" element={<PrivateRoute><Question /></PrivateRoute>} />
        <Route path="/result" element={<PrivateRoute><Result /></PrivateRoute>} />
        <Route path="/leader-board" element={<Board />} />
      </Routes>
      <Toaster position={"top-right"} />
    </div>
  );
}

export default App;
