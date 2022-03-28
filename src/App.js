import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/partials/Header';
import Landing from './components/Landing';
import Footer from './components/partials/Footer';
import EmailSubscribe from './components/partials/EmailSubscribe';
import Events from './components/events/Events';
import Coaches from './components/Coaches';
import ShowEvent from './components/events/ShowEvent';
import './App.css';
import history from './history';
import Login from './components/admin/Login';



const App = () => {
  return (
    <div>
      
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<ShowEvent />} />
            <Route path="/pastevents" element={<Events />} />
            <Route path="/coaches" element={<Coaches />} />
          </Routes>
        </BrowserRouter>
        <EmailSubscribe />
        <Footer />
      
    </div>
  )
}


export default App;
